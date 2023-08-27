"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
let Header = () => {
  let userLoggedIn = true;
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <Link href="/">
            <Image src={logo} alt="logo" width={60} height={60} />
            <span>AI Prompts</span>
          </Link>
          <div className="collapse navbar-collapse" id="mobileMenu">
            <ul className="nav navbar-nav ms-auto">
              {userLoggedIn ? (
                <div>
                  <Link href="/" className="headerButton">
                    Create Post
                  </Link>
                  <button
                    type="button"
                    onClick={signOut}
                    className="headerButton"
                  >
                    {" "}
                    Sign Out
                  </button>
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="userProfile"
                      width={35}
                      height={35}
                    />
                  </Link>
                </div>
              ) : (
                <div>
                  <Link href="/" className="headerButton">
                    Sign In
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
