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

export const COLOR1 = "#0F172A"
export const COLOR2 = "#00425F"
export const COLOR3 = "#007383"
export const COLOR4 = "#00A68B"
export const COLOR5 = "#80D47C"
export const COLOR6 = "#F9F871"

const COLOR_ICONS = COLOR5

export const siteConfig = {
	name: "Nelsota IA",
	description: "On this page, I showcase my skills in building products with Artificial Intelligence.",
	navItems: [
		{
			label: "Orthography",
			href: "/orthography",
			description: "Correct spelling",
			component: <FaSpellCheck color={COLOR_ICONS}/>,
		},
		{
			label: "Pros & Cons",
			href: "/pros-cons",
			description: "Compare pros and cons.",
			component: <FaCodeCompare color={COLOR_ICONS}/>,
		},
		{
			label: "Stream Messages",
			href: "/stream",
			description: "Compare pros and cons with message streaming.",
			component: <FaWater color={COLOR_ICONS}/>,
		},
		{
			label: "Translate",
			href: "/translate",
			description: "Texts into other languages.",
			component: <FaLanguage color={COLOR_ICONS}/>,
		},
		{
			label: "Text to Speech",
			href: "/text-to-speech",
			description: "Convert text to audio.",
			component: <FaPodcast color={COLOR_ICONS}/>,
		},
		{
			label: "Images",
			href: "/image-generation",
			description: "Generate images.",
			component: <FaImage color={COLOR_ICONS}/>,
		},
		{
			label: "Edit Images",
			href: "/image-tunning",
			description: "Continuous generation.",
			component: <FaWandMagic color={COLOR_ICONS}/>,
		},
		{
			label: "Speech to Text",
			href: "/speech-to-text",
			description: "Convert audio to text.",
			component: <FaCommentDots color={COLOR_ICONS}/>,
		},
		{
			label: "Asistente Virtual",
			href: "/assistant",
			description: "Assistant information.",
			component: <FaUser color={COLOR_ICONS}/>,
		}
	],
	links: {
		createdBy: "https://nelsota.com",
	},
};
