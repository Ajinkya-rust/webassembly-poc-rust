mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("welcome on board");
}
//function for addition of two numbers
#[wasm_bindgen]
pub fn addition(a:f64,b:f64)->f64 {
  let sum:f64=a+b;
  return sum
}
//function for substraction of two numbers
#[wasm_bindgen]
pub fn substraction(a:f64,b:f64)->f64 {
  let sum:f64=a-b;
  return sum
}
//function for multiplication of two numbers
#[wasm_bindgen]
pub fn multiplication(a:f64,b:f64)->f64 {
  let sum:f64=a*b;
  return sum
}
//function for divison of two numbers
#[wasm_bindgen]
pub fn divion(a:f64,b:f64)->f64 {
  let sum:f64=a/b;
  return sum
}
