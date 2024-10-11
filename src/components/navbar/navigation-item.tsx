import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export interface NavItem {
	navigationLink: string;
	navigationDescription: string;
}

export function NavigationItem({ navigationLink, navigationDescription }: NavItem) {
	return (
    	<NavigationMenuItem>
        	<Link href={navigationLink} legacyBehavior passHref>
            	<NavigationMenuLink className={navigationMenuTriggerStyle()}>
                	{navigationDescription}
            	</NavigationMenuLink>
        	</Link>
    	</NavigationMenuItem>
	);
}

