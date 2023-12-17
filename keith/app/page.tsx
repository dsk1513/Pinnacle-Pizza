import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";


import Cards from "@/components/Cards";
import About from "@/components/Aboutuss";
import Cardstext from "@/components/Cardstext";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<>
	
		
		<br /><br /><br /><br /><br /><br />
    <Cardstext/>
    <br /><br />
		<Cards/>
		<br /><br /><br /><br /><br /><br /><br /><br></br>
		 <About/>
		 <br /><br /><br />
		 <Footer/>
		</>
		
	);
}
