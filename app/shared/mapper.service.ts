import { Injectable } from '@angular/core';

import { Vehicle } from './vehicle.model';

import { Logger } from 'angular2-logger/core';

@Injectable()
export class MapperService {

    constructor(private _logger: Logger) {
        this._logger.debug('MapperService - constructor - initialized');
    }

    mapResponseToJson(response: any): void {
        this._logger.debug('MapperService - mapResponseToJson - response: ' + response);
        var result = response.json();
        this._logger.debug('MapperService - mapResponseToJson - mapped response: ' + result);

        return result;
    }

    mapVehicles(responseData: any): Vehicle[] {
        this._logger.debug('MapperService - mapVehicles - response: ' + responseData);
        // create empty array
        var vehicles: Vehicle[] = [];
        // check if responseData is set
        if (!responseData || !responseData["search-result"]) {
            this._logger.error('MapperService - mapVehicles - Something went wrong with API call / Possible model change?');
            return vehicles;
        }
        var searchResult = responseData["search-result"];
        // check if vehicles are available
        if (searchResult.total == 0) {
            this._logger.error('MapperService - mapVehicles - Call is correct but no vehicles are available');
            return vehicles;
        }
        // fill Vehicles
        for (let i = 0; i < 20; i++) { //TODO use searchResult.total
            var vehicleApi = searchResult.ads.ad[i];
            var vehicleApiModel = vehicleApi.vehicle;
            var features = vehicleApiModel.features;
            var specifics = vehicleApiModel.specifics;
            var images = vehicleApiModel.images;
            var vehicleToAdd: Vehicle = {
                id: vehicleApi['@key'],
                url: vehicleApi['@url'],
                creationDate: vehicleApi['creation-date']['@value'],
                modificationDate: vehicleApi['modification-date']['@value'],
                detailPageUrl: vehicleApi['detail-page']['@url'],
                vehicleDetail: {
                    class: this.mapVehicleClass(vehicleApiModel.class),
                    category: this.mapVehicleCategory(vehicleApiModel.category),
                    make: this.mapVehicleMake(vehicleApiModel.make),
                    modelDescription: vehicleApiModel['model-description'],
                    features: {
                        url: features['@url'],
                        feature: {
                            key: features.feature['@key'],
                            url: features.feature['@url'],
                            localDescription: features.feature['local-description'] ? features.feature['local-description']['$'] : ""
                        }
                    },
                    specifics: {
                        power: specifics ? specifics.power['@value'] : '',
                        operatingHours: specifics['operation-hours'] ? specifics['operation-hours']['@value'] : '',
                        constructionYear: specifics['construction-year'] ? specifics['construction-year']['@value'] : '',
                        condition: specifics ? specifics.condition['local-description']['$'] : ''
                    },
                    description: vehicleApi.description,
                    images: this.mapImages(images),
                    price: {
                        currency: vehicleApi.price['@currency'],
                        type: vehicleApi.price['@type'],
                        consumerPriceAmount: vehicleApi.price['consumer-price-amount']['@value'],
                        isVatable: vehicleApi.price['vatable']['@value']
                    },
                    seller: {
                        key: vehicleApi.seller['@key'],
                        url: vehicleApi.seller['@url'],
                        type: vehicleApi.seller.type['@value'],
                        isTypeCommercial: vehicleApi.seller.type['@commercial'],
                        address: {
                            zipCode: vehicleApi.seller.address.zipcode['@value'],
                            city: vehicleApi.seller.address.city['@value'],
                            countryCode: vehicleApi.seller.address['country-code']['@value']
                        },
                        coordinates: {
                            latitude: vehicleApi.seller.coordinates.latitude,
                            longitude: vehicleApi.seller.coordinates.longitude
                        }
                    }
                }
            };

            vehicles.push(vehicleToAdd);
        }
        console.log(vehicles);
        this._logger.info("MapperService - mapVehicles - Vehicles total: " + vehicles.length);

        return vehicles;
    }

    mapVehicleClass(vehicleClassApiModel: any) {
        if (!vehicleClassApiModel) {
            this._logger.warn("MapperService - mapVehicleClass - vehicleClassApiModel is empty.");
        }

        return this.mapKeyValueDescriptionSubModel(vehicleClassApiModel);
    }

    mapVehicleCategory(vehicleCategoryApiModel: any) {
        if (!vehicleCategoryApiModel) {
            this._logger.warn("MapperService - mapVehicleClass - vehicleCategoryApiModel is empty.");
        }

        return this.mapKeyValueDescriptionSubModel(vehicleCategoryApiModel);
    }

    mapVehicleMake(vehicleMakeModel: any) {
        if (!vehicleMakeModel) {
            this._logger.warn("MapperService - mapVehicleMake - vehicleMakeModel is empty.");
        }

        return this.mapKeyValueDescriptionSubModel(vehicleMakeModel);
    }

    mapKeyValueDescriptionSubModel(subModel: any) {
        var localDescription = subModel['local-description'] ? subModel['local-description']['$'] : "";

        var mappedSubModel = {
            key: subModel['@key'],
            url: subModel['@url'],
            description: localDescription
        };
        return mappedSubModel;
    }

    mapImages(imageApiModel: any) {

        if (!imageApiModel) {
            this._logger.warn("MapperService - mapImage - imageApiModel is empty.");
        }

        var mappedImageModel = {
            count: imageApiModel ? imageApiModel['@count'] : "",
            galleryUrl: imageApiModel ? imageApiModel['@gallery-url'] : "",
            url: imageApiModel ? imageApiModel['@url'] : "",
            image: {
                representation:
                {
                    sizeSUrl: imageApiModel ? imageApiModel.image.representation[0]['@url'] : "",
                    sizeXLUrl: imageApiModel ? imageApiModel.image.representation[1]['@url'] : "",
                    sizeIconUrl: imageApiModel ? imageApiModel.image.representation[2]['@url'] : "",
                    sizeLUrl: imageApiModel ? imageApiModel.image.representation[3]['@url'] : "",
                    sizeMUrl: imageApiModel ? imageApiModel.image.representation[4]['@url'] : ""
                }

            }
        };
        return mappedImageModel;
    }
}