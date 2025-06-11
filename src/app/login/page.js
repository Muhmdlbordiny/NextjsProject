import React from "react";
import Link from "next/link";
export default function login(){
    return (
<form className="form">
  <span className="input-span">
    <label for="email" className="label">Email</label>
    <input type="email" name="email" id="email"
  /></span>
  <span className="input-span">
    <label for="password" className="label">Password</label>
    <input type="password" name="password" id="password"
  /></span>
  <span className="span"><Link href="#">Forgot password?</Link></span>
  <input className="submit" type="submit" value="Log in" />
  <span className="span">Don't have an account? <Link href="#">Sign up</Link></span>
</form>
    );
}