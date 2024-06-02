import { Uri } from "../gleam_stdlib/gleam/uri.mjs";
import { Some, None } from "../gleam_stdlib/gleam/option.mjs";


export function location() {
  let location = window.location;

  return new Uri(
    /* scheme   */ location.protocol ? new Some(location.protocol) : new None(),
    /* userinfo */ new None(),
    /* host     */ location.host ? new Some(location.host) : new None(),
    /* port     */ location.port ? new Some(Number(location.port)) : new None(),
    /* path     */ location.pathname,
    /* query    */ location.search ? new Some(location.search.slice(1)) : new None(),
    /* fragment */ location.hash ? new Some(location.hash.slice(1)) : new None(),
  );
}
