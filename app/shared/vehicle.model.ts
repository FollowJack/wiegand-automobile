
export class Vehicle {
  id: string;
  url: string;
  creationDate: string; //TODO change to DATE
  modificationDate: string;
  detailPageUrl: string;
  vehicleDetail: {
    class: {
      key: string;
      url: string;
      description: string;
    },
    category: {
      key: string;
      url: string;
      description: string;
    },
    make: {
      key: string;
      url: string;
      description: string;
    },
    modelDescription: string;
    features: {
      url: string;
      feature: {
        key: string;
        url: string;
        localDescription: string;
      }
    }
    specifics: {
      power: string;
      operatingHours: string;
      constructionYear: string;
      condition: string;
    }
    description: string;
    images: {
      count: number;
      galleryUrl: string
      url: string;
      image: {
        representation:
        {
          sizeSUrl: string;
          sizeXLUrl: string;
          sizeIconUrl: string;
          sizeLUrl: string;
          sizeMUrl: string;
        }

      }
    }
    price: {
      currency: string;
      type: string;
      consumerPriceAmount: number;
      isVatable: boolean;
    }
    seller: {
      key: string;
      url: string;
      type: string;
      isTypeCommercial: boolean;
      address: {
        zipCode: string;
        city: string;
        countryCode: string;
      }
      coordinates: {
        latitude: number;
        longitude: number;
      }
    }
  }
}