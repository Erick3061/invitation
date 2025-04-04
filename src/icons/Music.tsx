export const Music = ({refName}:{ refName: React.RefObject<SVGSVGElement>;}) => {
    return (
        <svg ref={refName} className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M9 17v-13h10v13" />
            <path d="M9 8h10" />
        </svg>
    )
}
