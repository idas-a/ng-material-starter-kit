export interface InfluencersModel {
  readonly name: string;
  readonly avatar: string;
  readonly followedBy: {
    name:string,
    id:number
};
  readonly id:number
}
