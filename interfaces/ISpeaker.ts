interface ISpeakerData {
  speakerBio?: string
  speakerCompany?: string
  speakerFirstName?: string
  speakerImage?: string
  speakerJobTitle?: string
  speakerLastName?: string
  speakerName?: string
}

export interface ISpeakerModal {
  speaker: ISpeakerData
  toggleVisibility: Function,
  show: boolean
}

export interface ISpeaker {
  speaker: ISpeakerData
}

export interface ISpeakers {
  heading?: string
  speakersIntro?: string   
  speakers: Array<ISpeakerData>
}