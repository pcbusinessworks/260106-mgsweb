import * as LucideIcons from 'lucide-react'
import { cn } from '@/utils/cn'

type IconName = keyof typeof LucideIcons

interface IconProps {
  name: IconName
  size?: number | string
  className?: string
  color?: string
}

export function Icon({ name, size = 24, className, color, ...props }: IconProps) {
  const LucideIcon = LucideIcons[name] as React.ComponentType<any>
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide React`)
    return null
  }

  return (
    <LucideIcon
      size={size}
      className={cn('flex-shrink-0', className)}
      color={color}
      {...props}
    />
  )
}

// Common icon components for easy use
export const BriefcaseIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Briefcase" {...props} />
)

export const UsersIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Users" {...props} />
)

export const ZapIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Zap" {...props} />
)

export const StarIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Star" {...props} />
)

export const ShieldIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Shield" {...props} />
)

export const RocketIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Rocket" {...props} />
)

export const CheckIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Check" {...props} />
)

export const ArrowRightIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="ArrowRight" {...props} />
)

export const MailIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Mail" {...props} />
)

export const PhoneIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Phone" {...props} />
)

export const MapPinIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="MapPin" {...props} />
)

export const MenuIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Menu" {...props} />
)

export const XIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="X" {...props} />
)

export const ExternalLinkIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="ExternalLink" {...props} />
)

export const GithubIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Github" {...props} />
)

export const LinkedinIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Linkedin" {...props} />
)

export const TwitterIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Twitter" {...props} />
)

export const FacebookIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Facebook" {...props} />
)

export const InstagramIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Instagram" {...props} />
)

export const YoutubeIcon = (props: Omit<IconProps, 'name'>) => (
  <Icon name="Youtube" {...props} />
)
