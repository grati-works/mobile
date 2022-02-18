import LightLogo from '../../assets/images/logo.svg';
import DarkLogo from '../../assets/images/logo_dark.svg';

interface LogoProps {
    mode?: 'light' | 'dark';
    size?: number;
}

export function Logo({ mode = "light", size = 180 }: LogoProps) {
    return (
        mode === "light" ?
        <DarkLogo width={size} height={size} /> :
        <LightLogo width={size} height={size} />
    )
}