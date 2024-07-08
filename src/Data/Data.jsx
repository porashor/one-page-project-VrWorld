import React from "react"
import { FaCameraRetro } from "react-icons/fa"
import { GiNotebook } from "react-icons/gi"
import { SlNote } from "react-icons/sl"

export const NavLinks = [
    {
        name: "Home",
        links: "home"
    },
    {
        name: "Products",
        links: "products"
    },
    {
        name: "Pricing",
        links: "pricing"
    },
    {
        name: "Contact",
        links: "contact"
    },
]



export const featuresData = [
    {
        name: "Captivating Videos",
        icon: (
            <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link: "capa",
        descriptions: "You can choose the natural videos from here that you want to use as a complement",
        aosDelay : "0"
    },
    {
        name: "Safe Transactions",
        icon: (
            <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link: "safe",
        descriptions: "You can choose the natural our transactions from here that you want ",
        aosDelay : "500"
    },
    {
        name: "Experinence Reality",
        icon: (
            <SlNote className="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link: "exp",
        descriptions: "Your experience get priority from here that you want to use as a complement",
        aosDelay : "1000"
    },
]