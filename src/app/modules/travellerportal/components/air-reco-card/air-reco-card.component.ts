import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-reco-card',
  templateUrl: './air-reco-card.component.html',
  styleUrls: ['./air-reco-card.component.scss']
})
export class AirRecoCardComponent implements OnInit {

  constructor() { }

  private airReco:any;
  private currency:string;
  private outbounds:any;
  private inbounds:any;

  ngOnInit() {
    const airData: any = {
      "currency": "USD",
      "results": [
        {
          "itineraries": [
            {
              "outbound": {
                "duration": "17:20",
                "flights": [
                  {
                    "departs_at": "2018-09-01T07:55",
                    "arrives_at": "2018-09-01T09:30",
                    "origin": {
                      "airport": "NCE",
                      "terminal": "2"
                    },
                    "destination": {
                      "airport": "CDG",
                      "terminal": "2F"
                    },
                    "marketing_airline": "AF",
                    "operating_airline": "AF",
                    "flight_number": "7707",
                    "aircraft": "319",
                    "booking_info": {
                      "travel_class": "ECONOMY",
                      "booking_code": "L",
                      "seats_remaining": 9
                    }
                  },
                  {
                    "departs_at": "2018-09-01T11:30",
                    "arrives_at": "2018-09-02T00:05",
                    "origin": {
                      "airport": "CDG",
                      "terminal": "2F"
                    },
                    "destination": {
                      "airport": "BOM",
                      "terminal": "2"
                    },
                    "marketing_airline": "AF",
                    "operating_airline": "JN",
                    "flight_number": "218",
                    "aircraft": "343",
                    "booking_info": {
                      "travel_class": "ECONOMY",
                      "booking_code": "V",
                      "seats_remaining": 4
                    }
                  },
                  {
                    "departs_at": "2018-09-02T03:05",
                    "arrives_at": "2018-09-02T04:45",
                    "origin": {
                      "airport": "BOM",
                      "terminal": "2"
                    },
                    "destination": {
                      "airport": "BLR"
                    },
                    "marketing_airline": "AF",
                    "operating_airline": "9W",
                    "flight_number": "6775",
                    "aircraft": "73H",
                    "booking_info": {
                      "travel_class": "ECONOMY",
                      "booking_code": "V",
                      "seats_remaining": 7
                    }
                  }
                ]
              },
              "inbound": {
                "duration": "18:00",
                "flights": [
                  {
                    "departs_at": "2018-09-28T01:45",
                    "arrives_at": "2018-09-28T08:45",
                    "origin": {
                      "airport": "BLR"
                    },
                    "destination": {
                      "airport": "AMS"
                    },
                    "marketing_airline": "KL",
                    "operating_airline": "9W",
                    "flight_number": "3813",
                    "aircraft": "333",
                    "booking_info": {
                      "travel_class": "ECONOMY",
                      "booking_code": "V",
                      "seats_remaining": 7
                    }
                  },
                  {
                    "departs_at": "2018-09-28T14:20",
                    "arrives_at": "2018-09-28T16:15",
                    "origin": {
                      "airport": "AMS"
                    },
                    "destination": {
                      "airport": "NCE",
                      "terminal": "2"
                    },
                    "marketing_airline": "KL",
                    "operating_airline": "KL",
                    "flight_number": "1257",
                    "aircraft": "73W",
                    "booking_info": {
                      "travel_class": "ECONOMY",
                      "booking_code": "L",
                      "seats_remaining": 2
                    }
                  }
                ]
              }
            }
          ],
          "fare": {
            "total_price": "538.28",
            "price_per_adult": {
              "total_fare": "538.28",
              "tax": "396.28"
            },
            "restrictions": {
              "refundable": false,
              "change_penalties": true
            }
          }
        }
      ]
    };

    this.airReco = airData.results[0];
    this.currency = airData.currency;
    this.outbounds = airData.results[0].itineraries[0].outbound;
    this.inbounds = airData.results[0].itineraries[0].inbound;
  }

}
