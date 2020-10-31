import { IStation } from '../types';

export const getSelectedStation = ({ radio }: any): IStation | null  => radio.stations.find((i: IStation) => i.id === radio.selectedStationId) || null;

export const getTagsSelector = ({ radio }: any): string[] | null  => radio.tags;