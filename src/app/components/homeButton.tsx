import Image from "next/image";
import home from "../images/home.png"
import Link from "next/link";

export default function HomeButton() {
    return (
        <Link href="/"><Image src={home} alt="Home" width={200} height={200}></Image></Link>
    )
}