export interface BeerItemModel {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: VolumeModel;
  boil_volume: VolumeModel;
  method: MethodModel;
  ingredients: IngredientsModel;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface VolumeModel {
  value: number;
  unit: string;
}

export interface MethodModel {
  mash_temp: MashTempModel[];
  fermentation: FermentationModel;
  twist: any;
}

export interface MashTempModel {
  temp: VolumeModel;
  duration: number;
}

export interface FermentationModel {
  temp: VolumeModel;
}

export interface IngredientsModel {
  malt: MaltModel[];
  hops: HopsModel[];
  yeast: string;
}

export interface MaltModel {
  name: string;
  amount: VolumeModel;
}

export interface HopsModel {
  name: string;
  amount: VolumeModel;
  add: string;
  attribute: string;
}
