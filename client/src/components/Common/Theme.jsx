import { useSelector } from "react-redux"


// Theme
export function useTheme(){
    const { themeMode } = useSelector((state) => state.StringSlice);
    const { dark } = themeMode;

    const mainBg = 'bg-[#7269ef]';
    const mainTxt = 'text-[#7269ef]';
    
    const primaryTxt = `${dark ? 'text-[#eff2f7]' : 'text-[#343a40]'}`;
    const primaryTxtWithHover = `${dark ? 'border-[#e6ebf511]' : 'border-[#e6ebf5]'}`;

    const secondaryTxt = `${dark ? 'text-[#abb4d2]' : 'text-[#7a7f9a]'}`;
    const secondaryTxtWithHover = `${dark ? 'text-[#abb4d2] hover:text-[#eff2f7]' : 'text-[#7a7f9a] hover:text-[#343a40]'}`;
    
    const primaryBg = `${dark ? 'bg-[#262e35]' : 'bg-[#ffffff]'}`;
    const primaryBgWithHover = `${dark ? 'bg-[#262e35] hover:bg-[#262e3faa]' : 'bg-[#ffffff] hover:bg-[#ffffffaa]'}`;
    
    const secondaryBg = `${dark ? 'bg-[#303841]' : 'bg-[#f5f7fb]'}`;

    const primaryLightBg = `${dark ? 'bg-[#a6b0cf11]' : 'bg-[#e6ebf5]'}`;
    
    const commonBg = `${dark ? 'bg-[#a6b0cf11]' : 'bg-[#e6ebf5]'}`;
    const commonBgHover = `${dark ? 'hover:bg-[#a6b0cf11]' : 'hover:bg-[#e6ebf5]'}`;

    const primaryHover = `${dark ? 'hover:bg-[#e6ebf511]' : 'hover:bg-[#e6ebf5]'}`;

    const border = `${dark ? 'border-[#e6ebf511]' : 'border-[#e6ebf5]'}`;
    const border2 = `${dark ? 'border-[#e6ebf511]' : 'border-[#e6ebf5]'}`;

    const placeholderTxt = `${dark ? 'placeholder:text-[#abb4d2]' : 'placeholder:text-[#7a7f9a]'}`;

    return {
        mainBg,
        mainTxt,

        primaryTxt,
        primaryTxtWithHover,

        secondaryTxt,
        secondaryTxtWithHover,

        primaryBg,
        primaryBgWithHover,

        secondaryBg,

        primaryLightBg,

        commonBg,
        commonBgHover,

        primaryHover,

        border,
        
        placeholderTxt
    }
}