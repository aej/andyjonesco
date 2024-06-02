import gleam/io
import gleam/option.{type Option, None, Some}
import gleam/uri.{type Uri}

import lustre
import lustre/attribute
import lustre/effect
import lustre/element.{type Element}
import lustre/element/html
import modem

pub fn main() {
  let app = lustre.application(init, update, view)
  let assert Ok(_) = lustre.start(app, "#app", Nil)

  Nil
}

type Model {
  Model(current_route: Route)
}

pub type Route {
  Home
  Work
  Articles
}

pub type Message {
  OnRouteChange(Route)
}

fn init(_flags) -> #(Model, effect.Effect(Message)) {
  #(Model(current_route: Home), modem.init(on_url_change))
}

fn on_url_change(uri: Uri) -> Message {
  case uri.path_segments(uri.path) |> io.debug() {
    [] -> OnRouteChange(Home)
    ["work"] -> OnRouteChange(Work)
    ["articles"] -> OnRouteChange(Articles)
    _ -> OnRouteChange(Home)
  }
}

fn update(_model: Model, message: Message) -> #(Model, effect.Effect(Message)) {
  case message {
    OnRouteChange(route) -> #(Model(current_route: route), effect.none())
  }
}

fn nav_link(
  text: String,
  path: String,
  current_route: Route,
  active_route: Route,
) -> Element(a) {
  let class_name = case current_route == active_route {
    True -> "text-foreground"
    False -> "transition-colors hover:text-foreground text-foreground/60"
  }

  html.li([attribute.class(class_name)], [
    html.a([attribute.href(path)], [html.text(text)]),
  ])
}

fn page_header(title title: String, subtitle subtitle: Option(String)) {
  html.div([attribute.class("mt-10")], [
    html.h1(
      [
        attribute.class(
          "text-2xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
        ),
      ],
      [html.text(title)],
    ),
    case subtitle {
      Some(subtitle) -> {
        html.p([attribute.class("text-lg text-muted-foreground sm:text-xl")], [
          html.text(subtitle),
        ])
      }
      None -> element.none()
    },
  ])
}

fn home_view() {
  let page_header =
    page_header(
      title: "Hi, I'm Andy 👋",
      subtitle: Some("I'm a software developer based in London, UK."),
    )

  let footer =
    html.div([], [
      html.ul(
        [
          attribute.class(
            "mt-20 text-foreground flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4",
          ),
        ],
        [
          html.li([], [
            html.a(
              [
                attribute.class(
                  "flex items-center space-x-2 transition-colors hover:text-foreground text-foreground/60",
                ),
                attribute.href("https://twitter.com/andyjones11"),
                attribute.target("_blank"),
              ],
              [html.span([], [html.text("Follow me on Twitter")])],
            ),
          ]),
          html.a(
            [
              attribute.class(
                "flex items-center space-x-2 transition-colors hover:text-foreground text-foreground/60",
              ),
              attribute.href("https://www.linkedin.com/in/andy-jones-111/"),
              attribute.target("_blank"),
            ],
            [html.span([], [html.text("Find me on LinkedIn")])],
          ),
          html.a(
            [
              attribute.class(
                "flex items-center space-x-2 transition-colors hover:text-foreground text-foreground/60",
              ),
              attribute.href("mailto:contact@andyjones.co"),
              attribute.target("_blank"),
            ],
            [html.span([], [html.text("Send me an email")])],
          ),
        ],
      ),
    ])

  let page_body =
    html.div([attribute.class("space-y-8 mt-10")], [
      html.p([attribute.class("leading-7")], [
        html.text(
          "
With experience in both backend and frontend development, I have had
the opportunity to work with various organizations, including
startups, scale-ups, and agencies. I have also ventured into
entrepreneurship, starting my own businesses.
      ",
        ),
      ]),
      html.div([attribute.class("flex justify-center")], [
        html.img([
          attribute.alt("My best self"),
          attribute.class("rounded-lg w-96"),
          attribute.src("/priv/assets/me.jpeg"),
        ]),
      ]),
      html.div([attribute.class("mt-12 space-y-4 leading-7")], [
        html.p([], [
          html.text(
            "I have particular expertise in the following technologies:",
          ),
        ]),
        html.ul([attribute.class("space-y-3")], [
          html.li([attribute.class("flex space-x-2 items-center")], [
            html.img([
              attribute.class("w-8 h-8"),
              attribute.src("/priv/assets/python.svg"),
            ]),
            html.span([], [html.text("Python")]),
          ]),
          html.li([attribute.class("flex space-x-2 items-center")], [
            html.img([
              attribute.class("w-8 h-8"),
              attribute.src("/priv/assets/typescript.svg"),
            ]),
            html.span([], [html.text("Typescript")]),
          ]),
          html.li([attribute.class("flex space-x-2 items-center")], [
            html.img([
              attribute.class("w-8 h-8"),
              attribute.src("/priv/assets/elixir.svg"),
            ]),
            html.span([], [html.text("Elixir")]),
          ]),
        ]),
      ]),
      footer,
    ])

  html.div([], [page_header, page_body])
}

fn work_card() {
  html.div(
    [attribute.class("rounded-xl border bg-white dark:bg-white shadow")],
    [
      html.div([attribute.class("p-6")], [
        html.div([attribute.class("flex place-content-center")], [
          html.div([attribute.class("flex flex-col items-center space-y-4")], [
            html.text("sadkasdasd"),
          ]),
        ]),
      ]),
    ],
  )
}

fn work_view() {
  let page_header = page_header(title: "Work and Projects", subtitle: None)
  let page_body =
    html.div([attribute.class("mt-10 grid grid-cols-1 gap-8")], [
      work_card(),
      work_card(),
      work_card(),
    ])
  html.div([], [page_header, page_body])
}

fn articles_view() {
  html.div([], [element.text("you're on articles")])
}

fn header(current_route: Route) {
  html.div([attribute.class("mt-5 md:mt-10 flex justify-between")], [
    html.ul([attribute.class("flex items-center space-x-4")], [
      nav_link("home", "/", current_route, Home),
      nav_link("work", "/work", current_route, Work),
      nav_link("articles", "/articles", current_route, Articles),
    ]),
  ])
}

fn view(model: Model) -> Element(Message) {
  html.main([attribute.class("p-4 max-w-3xl mx-auto")], [
    header(model.current_route),
    case model.current_route {
      Home -> home_view()
      Work -> work_view()
      Articles -> articles_view()
    },
  ])
}
