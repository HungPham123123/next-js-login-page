import Link from "next/link";

function Header () {

    return(
        <>
        <div className="fixed">
        <Link href="/auth/login">User Account</Link>
        </div>
        </>
    );
}

export default Header;