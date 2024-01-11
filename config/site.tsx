export type SiteConfig = typeof siteConfig;
import { 
	FaCodeCompare, 
	FaWater, 
	FaLanguage, 
	FaPodcast, 
	FaSpellCheck,
	FaImage,
	FaWandMagic,
	FaCommentDots,
	FaUser
} from "react-icons/fa6";

export const siteConfig = {
	name: "Nelsota IA",
	description: "On this page, I showcase my skills in building products with Artificial Intelligence.",
	navItems: [
		{
			label: "Orthography",
			href: "/orthography",
			description: "Correct spelling",
			component: <FaSpellCheck />,
		},
		{
			label: "Pros & Cons",
			href: "/pros-cons",
			description: "Compare pros and cons.",
			component: <FaCodeCompare />,
		},
		{
			label: "Stream Messages",
			href: "/stream",
			description: "Compare pros and cons with message streaming.",
			component: <FaWater />,
		},
		{
			label: "Translate",
			href: "/translate",
			description: "Texts into other languages.",
			component: <FaLanguage />,
		},
		{
			label: "Text to Speech",
			href: "/text-to-speech",
			description: "Convert text to audio.",
			component: <FaPodcast />,
		},
		{
			label: "Images",
			href: "/image-generation",
			description: "Generate images.",
			component: <FaImage />,
		},
		{
			label: "Edit Images",
			href: "/image-tunning",
			description: "Continuous generation.",
			component: <FaWandMagic />,
		},
		{
			label: "Speech to Text",
			href: "/speech-to-text",
			description: "Convert audio to text.",
			component: <FaCommentDots />,
		},
		{
			label: "Asistente Virtual",
			href: "/assistant",
			description: "Assistant information.",
			component: <FaUser />,
		}
	],
	links: {
		createdBy: "https://nelsota.com",
	},
};
