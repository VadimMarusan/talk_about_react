import React from "react"
import SectionEditorsPicks from "./SectionEditorsPicks/SectionEditorsPicks"
import SectionPolitics from "./SectionPolitics/SectionPolitics"
import SectionReel from "./SectionReel/SectionReel"
import SectionScience from "./SectionScience/SectionScience"
import SectionSlider from "./SectionSlider/SectionSlider"


const SectionsSpotify = () => {
    return (
        <div>
            <SectionEditorsPicks/>
            <SectionPolitics/>
            <SectionReel/>
            <SectionScience/>
            <SectionSlider/>
        </div>
    )
}

export default SectionsSpotify