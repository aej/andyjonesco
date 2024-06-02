import gleam/uri.{type Uri}

@external(javascript, "./andyjonesco_ffi.mjs", "location")
pub fn location() -> Uri
