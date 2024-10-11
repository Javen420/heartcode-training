
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";


export interface NavItem {
	navigationLink: string;
	navigationDescription: string;
}

export function NavigationBar() {
    return (
        
            <NavigationMenu className="flex flex-row place-items-center ms-10 list-none h-8 bg-transparent rounded-full justify-between top-6 sticky ">
                <NavigationMenuItem>
                    <Link href="/home" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                            <img src="/heart.png" alt ="Home" style ={{ maxWidth: '25px', height: 'auto' }}/>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/quiz" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
                            Quiz
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about-me" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About me
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <ModeToggle></ModeToggle>
            </NavigationMenu>
        
    )
}
