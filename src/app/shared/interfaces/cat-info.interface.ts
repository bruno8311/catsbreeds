export interface CatBreedInfo {
    breeds: Breed[];
    id:     string;
    url:    string;
    width:  number;
    height: number;
}

export interface Breed {
    weight:             Weight;
    id:                 ID;
    name:               Name;
    cfa_url:            string;
    vetstreet_url:      string;
    vcahospitals_url:   string;
    temperament:        Temperament;
    origin:             Origin;
    country_codes:      CountryCode;
    country_code:       CountryCode;
    description:        string;
    life_span:          LifeSpan;
    indoor:             number;
    lap:                number;
    adaptability:       number;
    affection_level:    number;
    child_friendly:     number;
    cat_friendly:       number;
    dog_friendly:       number;
    energy_level:       number;
    grooming:           number;
    health_issues:      number;
    intelligence:       number;
    shedding_level:     number;
    social_needs:       number;
    stranger_friendly:  number;
    vocalisation:       number;
    bidability:         number;
    experimental:       number;
    hairless:           number;
    natural:            number;
    rare:               number;
    rex:                number;
    suppressed_tail:    number;
    short_legs:         number;
    wikipedia_url:      string;
    hypoallergenic:     number;
    reference_image_id: ReferenceImageID;
}

export enum CountryCode {
    Us = "US",
}

export enum ID {
    Beng = "beng",
}

export enum LifeSpan {
    The1215 = "12 - 15",
}

export enum Name {
    Bengal = "Bengal",
}

export enum Origin {
    UnitedStates = "United States",
}

export enum ReferenceImageID {
    O3BtzLlsO = "O3btzLlsO",
}

export enum Temperament {
    AlertAgileEnergeticDemandingIntelligent = "Alert, Agile, Energetic, Demanding, Intelligent",
}

export interface Weight {
    imperial: Imperial;
    metric:   Metric;
}

export enum Imperial {
    The612 = "6 - 12",
}

export enum Metric {
    The37 = "3 - 7",
}
