import React from "react"
import ContentLoader from "react-content-loader"

const Skelet = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={420}
        viewBox="0 0 280 420"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="12" ry="12" width="246" height="138" />
        <rect x="0" y="155" rx="6" ry="6" width="206" height="20" />
        <rect x="0" y="192" rx="6" ry="6" width="246" height="71" />
        <rect x="43" y="275" rx="12" ry="12" width="160" height="36" />
    </ContentLoader>
)

export default Skelet