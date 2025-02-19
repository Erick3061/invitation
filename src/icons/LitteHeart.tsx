import { SVGProps } from './interfaces'

export const LitteHeart = ({ className }: SVGProps) => {
    return (
        <svg className={className?.className} width="20px" height="20px" viewBox="0 0 100 100" y="0px" x="0px"  >
            <g>
                <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2"></path>
            </g>
        </svg>
    )
}
