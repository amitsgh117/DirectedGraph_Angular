import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  nodes = input.nodes
  links = input.edges
}

// const input = {"lead_id":998855,"nodes":[{"id":"MILESTONE_SCHEDULED","label":"SCHEDULED","type":"completed","info":[{"user_id":4087,"time_stamp":"Jun 9, 2022 6:38 PM"}]},{"id":"MILESTONE_VISITED","label":"VISITED","type":"completed","info":[{"user_id":4087,"time_stamp":"Jun 9, 2022 6:39 PM"}]},{"id":"MILESTONE_INSPECTING","label":"INSPECTING","type":"completed","info":[{"user_id":4087,"time_stamp":"Jun 9, 2022 6:41 PM"}]},{"id":"MILESTONE_INSPECTED","label":"INSPECTED","type":"completed","info":[{"user_id":3333,"time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_NEGOTIATION_W/O_INSPECTION","label":"NEGOTIATION W/O INSPECTION","type":"current","info":[{"user_id":3333,"time_stamp":"Jun 16, 2022 2:19 PM"}]},{"id":"MILESTONE_BIDDING","label":"bidding","type":"not completed"},{"id":"MILESTONE_BIDDING_OVER","label":"bidding over","type":"not completed"},{"id":"MILESTONE_NEGOTIATION","label":"negotiation","type":"not completed"},{"id":"MILESTONE_VAHANCHECK","label":"vahancheck","type":"not completed"},{"id":"MILESTONE_HOT","label":"hot","type":"not completed"},{"id":"MILESTONE_WON","label":"won","type":"not completed"},{"id":"MILESTONE_STOCK_IN","label":"stock in","type":"not completed"},{"id":"MILESTONE_VEHICLE_SOLD","label":"vehicle sold","type":"not completed"},{"id":"MILESTONE_DEALER_PAYMENT","label":"dealer payment","type":"not completed"},{"id":"MILESTONE_GATEPASS","label":"gatepass","type":"not completed"},{"id":"MILESTONE_STOCK_OUT","label":"stock out","type":"not completed"},{"id":"MILESTONE_TRANSFERED","label":"transfered","type":"not completed"}],"edges":[{"edge_id":"scheduled to visited","source":"MILESTONE_SCHEDULED","target":"MILESTONE_VISITED","label":"1","type":"followed"},{"edge_id":"visited to inspecting","source":"MILESTONE_VISITED","target":"MILESTONE_INSPECTING","label":"2","type":"followed"},{"edge_id":"inspecting to inspected","source":"MILESTONE_INSPECTING","target":"MILESTONE_INSPECTED","label":"3","type":"followed"},{"edge_id":"inspected to negotiation w/o inspection","source":"MILESTONE_INSPECTED","target":"MILESTONE_NEGOTIATION_W/O_INSPECTION","label":"4","type":"followed"},{"edge_id":"inspected to inspecting","source":"MILESTONE_INSPECTED","target":"MILESTONE_INSPECTING","type":"not followed"},{"edge_id":"inspected to bidding","source":"MILESTONE_INSPECTED","target":"MILESTONE_BIDDING","type":"not followed"},{"edge_id":"bidding to bidding_over","source":"MILESTONE_BIDDING","target":"MILESTONE_BIDDING_OVER","type":"not followed"},{"edge_id":"bidding_over to inspected","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_INSPECTED","type":"not followed"},{"edge_id":"bidding_over to negotiation","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_NEGOTIATION","type":"not followed"},{"edge_id":"negotiation to vahancheck","source":"MILESTONE_NEGOTIATION","target":"MILESTONE_VAHANCHECK","type":"not followed"},{"edge_id":"vahancheck to hot","source":"MILESTONE_VAHANCHECK","target":"MILESTONE_HOT","type":"not followed"},{"edge_id":"hot to won","source":"MILESTONE_HOT","target":"MILESTONE_WON","type":"not followed"},{"edge_id":"won to stock_in","source":"MILESTONE_WON","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_in to stock_out","source":"MILESTONE_STOCK_IN","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"stock_in to vehicle_sold","source":"MILESTONE_STOCK_IN","target":"MILESTONE_VEHICLE_SOLD","type":"not followed"},{"edge_id":"vehicle_sold to dealer_payment","source":"MILESTONE_VEHICLE_SOLD","target":"MILESTONE_DEALER_PAYMENT","type":"not followed"},{"edge_id":"dealer_payment to gatepass","source":"MILESTONE_DEALER_PAYMENT","target":"MILESTONE_GATEPASS","type":"not followed"},{"edge_id":"gatepass to stock_out","source":"MILESTONE_GATEPASS","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"stock_out to stock_in","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_out to transfered","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_TRANSFERED","type":"not followed"}]}

// const input = {"lead_id":998855,"nodes":[{"id":"MILESTONE_SCHEDULED","label":"scheduled","type":"not completed"},{"id":"MILESTONE_VISITED","label":"visited","type":"not completed"},{"id":"MILESTONE_VISITED_W/O_INSPECTION","label":"visited w/o inspection","type":"not completed"},{"id":"MILESTONE_INSPECTING","label":"inspecting","type":"not completed"},{"id":"MILESTONE_INSPECTED","label":"inspected","type":"not completed"},{"id":"MILESTONE_BIDDING","label":"bidding","type":"not completed"},{"id":"MILESTONE_BIDDING_OVER","label":"bidding over","type":"not completed"},{"id":"MILESTONE_NEGOTIATION","label":"negotiation","type":"not completed"},{"id":"MILESTONE_VAHANCHECK","label":"vahancheck","type":"not completed"},{"id":"MILESTONE_HOT","label":"hot","type":"not completed"},{"id":"MILESTONE_HOT_W/O_INSPECTION","label":"hot w/o inspection","type":"not completed"},{"id":"MILESTONE_NEGOTIATION_W/O_INSPECTION","label":"negotiation w/o inspection","type":"not completed"},{"id":"MILESTONE_WON","label":"won","type":"not completed"},{"id":"MILESTONE_WON_W/O_INSPECTION","label":"won w/o inspection","type":"not completed"},{"id":"MILESTONE_STOCK_IN","label":"stock in","type":"not completed"},{"id":"MILESTONE_VEHICLE_SOLD","label":"vehicle sold","type":"not completed"},{"id":"MILESTONE_DEALER_PAYMENT","label":"dealer payment","type":"not completed"},{"id":"MILESTONE_GATEPASS","label":"gatepass","type":"not completed"},{"id":"MILESTONE_STOCK_OUT","label":"stock out","type":"not completed"},{"id":"MILESTONE_TRANSFERED","label":"transfered","type":"not completed"}],"edges":[{"edge_id":"scheduled to visited","source":"MILESTONE_SCHEDULED","target":"MILESTONE_VISITED","type":"not followed"},{"edge_id":"visited to inspecting","source":"MILESTONE_VISITED","target":"MILESTONE_INSPECTING","type":"not followed"},{"edge_id":"inspecting to inspected","source":"MILESTONE_INSPECTING","target":"MILESTONE_INSPECTED","type":"not followed"},{"edge_id":"inspected to inspecting","source":"MILESTONE_INSPECTED","target":"MILESTONE_INSPECTING","type":"not followed"},{"edge_id":"visited w/o inspection to inspecting","source":"MILESTONE_VISITED_W/O_INSPECTION","target":"MILESTONE_INSPECTING","type":"not followed"},{"edge_id":"inspected to bidding","source":"MILESTONE_INSPECTED","target":"MILESTONE_BIDDING","type":"not followed"},{"edge_id":"bidding to bidding_over","source":"MILESTONE_BIDDING","target":"MILESTONE_BIDDING_OVER","type":"not followed"},{"edge_id":"bidding_over to inspected","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_INSPECTED","type":"not followed"},{"edge_id":"inspected to bidding_over","source":"MILESTONE_INSPECTED","target":"MILESTONE_BIDDING_OVER","type":"not followed"},{"edge_id":"bidding_over to negotiation","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_NEGOTIATION","type":"not followed"},{"edge_id":"negotiation to vahancheck","source":"MILESTONE_NEGOTIATION","target":"MILESTONE_VAHANCHECK","type":"not followed"},{"edge_id":"vahancheck to hot","source":"MILESTONE_VAHANCHECK","target":"MILESTONE_HOT","type":"not followed"},{"edge_id":"hot to won","source":"MILESTONE_HOT","target":"MILESTONE_WON","type":"not followed"},{"edge_id":"negotiation w/o inspection to hot w/o inspection","source":"MILESTONE_NEGOTIATION_W/O_INSPECTION","target":"MILESTONE_HOT_W/O_INSPECTION","type":"not followed"},{"edge_id":"hot w/o inspection to won w/o inspection","source":"MILESTONE_HOT_W/O_INSPECTION","target":"MILESTONE_WON_W/O_INSPECTION","type":"not followed"},{"edge_id":"won w/o inspection to stock_in","source":"MILESTONE_WON_W/O_INSPECTION","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"won to stock_in","source":"MILESTONE_WON","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_in to stock_out","source":"MILESTONE_STOCK_IN","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"stock_in to vehicle_sold","source":"MILESTONE_STOCK_IN","target":"MILESTONE_VEHICLE_SOLD","type":"not followed"},{"edge_id":"vehicle_sold to dealer_payment","source":"MILESTONE_VEHICLE_SOLD","target":"MILESTONE_DEALER_PAYMENT","type":"not followed"},{"edge_id":"dealer_payment to gatepass","source":"MILESTONE_DEALER_PAYMENT","target":"MILESTONE_GATEPASS","type":"not followed"},{"edge_id":"gatepass to stock_out","source":"MILESTONE_GATEPASS","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"stock_out to stock_in","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_out to transfered","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_TRANSFERED","type":"not followed"}]}

// const input = {"lead_id":998855,"nodes":[{"id":"MILESTONE_SCHEDULED","label":"scheduled","type":"not completed"},{"id":"MILESTONE_VISITED","label":"visited","type":"not completed"},{"id":"MILESTONE_VISITED_W/O_INSPECTION","label":"visited w/o inspection","type":"not completed"},{"id":"MILESTONE_INSPECTING","label":"inspecting","type":"not completed"},{"id":"MILESTONE_INSPECTED","label":"inspected","type":"not completed"},{"id":"MILESTONE_BIDDING","label":"bidding","type":"not completed"},{"id":"MILESTONE_BIDDING_OVER","label":"bidding over","type":"not completed"},{"id":"MILESTONE_NEGOTIATION","label":"negotiation","type":"not completed"},{"id":"MILESTONE_VAHANCHECK","label":"vahancheck","type":"not completed"},{"id":"MILESTONE_HOT","label":"hot","type":"not completed"},{"id":"MILESTONE_HOT_W/O_INSPECTION","label":"hot w/o inspection","type":"not completed"},{"id":"MILESTONE_NEGOTIATION_W/O_INSPECTION","label":"negotiation w/o inspection","type":"not completed"},{"id":"MILESTONE_WON","label":"won","type":"not completed"},{"id":"MILESTONE_WON_W/O_INSPECTION","label":"won w/o inspection","type":"not completed"},{"id":"MILESTONE_STOCK_IN","label":"stock in","type":"not completed"},{"id":"MILESTONE_VEHICLE_SOLD","label":"vehicle sold","type":"not completed"},{"id":"MILESTONE_DEALER_PAYMENT","label":"dealer payment","type":"not completed"},{"id":"MILESTONE_GATEPASS","label":"gatepass","type":"not completed"},{"id":"MILESTONE_STOCK_OUT","label":"stock out","type":"not completed"},{"id":"MILESTONE_TRANSFERED","label":"transfered","type":"not completed"}],"edges":[{"edge_id":"scheduled to visited","source":"MILESTONE_SCHEDULED","target":"MILESTONE_VISITED","type":"not followed"},{"edge_id":"visited to inspecting","source":"MILESTONE_VISITED","target":"MILESTONE_INSPECTING","type":"not followed"},{"edge_id":"inspecting to inspected","source":"MILESTONE_INSPECTING","target":"MILESTONE_INSPECTED","type":"not followed"},{"edge_id":"inspected to visited","source":"MILESTONE_INSPECTED","target":"MILESTONE_VISITED","label":"Cancel Inspection ++","type":"not followed"},{"edge_id":"inspected to inspecting","source":"MILESTONE_INSPECTED","target":"MILESTONE_INSPECTING","label":"ReInspection ++","type":"not followed"},{"edge_id":"visited w/o inspection to inspecting","source":"MILESTONE_VISITED_W/O_INSPECTION","target":"MILESTONE_INSPECTING","type":"not followed"},{"edge_id":"inspected to bidding","source":"MILESTONE_INSPECTED","target":"MILESTONE_BIDDING","type":"not followed"},{"edge_id":"bidding to bidding_over","source":"MILESTONE_BIDDING","target":"MILESTONE_BIDDING_OVER","type":"not followed"},{"edge_id":"bidding_over to inspected","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_INSPECTED","label":"ReBid++","type":"not followed"},{"edge_id":"inspected to bidding_over","source":"MILESTONE_INSPECTED","target":"MILESTONE_BIDDING_OVER","type":"not followed"},{"edge_id":"bidding_over to negotiation","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_NEGOTIATION","type":"not followed"},{"edge_id":"negotiation to vahancheck","source":"MILESTONE_NEGOTIATION","target":"MILESTONE_VAHANCHECK","type":"not followed"},{"edge_id":"vahancheck to hot","source":"MILESTONE_VAHANCHECK","target":"MILESTONE_HOT","type":"not followed"},{"edge_id":"hot to won","source":"MILESTONE_HOT","target":"MILESTONE_WON","type":"not followed"},{"edge_id":"negotiation w/o inspection to hot w/o inspection","source":"MILESTONE_NEGOTIATION_W/O_INSPECTION","target":"MILESTONE_HOT_W/O_INSPECTION","type":"not followed"},{"edge_id":"hot w/o inspection to won w/o inspection","source":"MILESTONE_HOT_W/O_INSPECTION","target":"MILESTONE_WON_W/O_INSPECTION","type":"not followed"},{"edge_id":"won w/o inspection to stock_in","source":"MILESTONE_WON_W/O_INSPECTION","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"won to stock_in","source":"MILESTONE_WON","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_in to vehicle_sold","source":"MILESTONE_STOCK_IN","target":"MILESTONE_VEHICLE_SOLD","type":"not followed"},{"edge_id":"stock_in to stock_out","source":"MILESTONE_STOCK_IN","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"vehicle_sold to stock_in","source":"MILESTONE_VEHICLE_SOLD","target":"MILESTONE_STOCK_IN","label":"BackOut","type":"not followed"},{"edge_id":"vehicle_sold to dealer_payment","source":"MILESTONE_VEHICLE_SOLD","target":"MILESTONE_DEALER_PAYMENT","type":"not followed"},{"edge_id":"dealer_payment to gatepass","source":"MILESTONE_DEALER_PAYMENT","target":"MILESTONE_GATEPASS","type":"not followed"},{"edge_id":"gatepass to stock_out","source":"MILESTONE_GATEPASS","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"stock_out to stock_in","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_out to transfered","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_TRANSFERED","type":"not followed"}]}

// const input = {"lead_id":998855,"nodes":[{"id":"MILESTONE_SCHEDULED","label":"SCHEDULED","type":"completed","info":[{"user_id":4087,"user_email":"a@b.com","time_stamp":"Jun 9, 2022 6:38 PM"}]},{"id":"MILESTONE_VISITED","label":"VISITED","type":"completed","info":[{"user_id":4087,"user_email":"","time_stamp":"Jun 9, 2022 6:39 PM"}]},{"id":"MILESTONE_INSPECTING","label":"INSPECTING","type":"completed","info":[{"user_id":4087,"user_email":"a@b.com","time_stamp":"Jun 9, 2022 6:41 PM"}]},{"id":"MILESTONE_INSPECTED","label":"INSPECTED","type":"completed","info":[{"user_id":3333,"user_email":"a@b.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_BIDDING","label":"BIDDING","type":"completed","info":[{"user_id":3333,"user_email":"s@a.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_BIDDING_OVER","label":"BIDDING OVER","type":"completed","info":[{"user_id":3333,"user_email":"s@a.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_NEGOTIATION","label":"NEGOTIATION","type":"completed","info":[{"user_id":3333,"user_email":"s@a.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_HOT","label":"HOT","type":"current","info":[{"user_id":3333,"user_email":"s@a.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_VAHANCHECK","label":"VAHANCHECK","type":"not completed"},{"id":"MILESTONE_WON","label":"WON","type":"not completed"},{"id":"MILESTONE_STOCK_IN","label":"STOCK IN","type":"not completed"},{"id":"MILESTONE_VEHICLE_SOLD","label":"VEHICLE SOLD","type":"not completed"},{"id":"MILESTONE_DEALER_PAYMENT","label":"DEALER PAYMENT","type":"not completed"},{"id":"MILESTONE_GATEPASS","label":"GATEPASS","type":"not completed"},{"id":"MILESTONE_STOCK_OUT","label":"STOCK OUT","type":"not completed"},{"id":"MILESTONE_INSPECTION_MISS","label":"INSPECTION MISS","type":"not completed"},{"id":"MILESTONE_TRANSFERED","label":"TRANSFERED","type":"not completed"}],"edges":[{"edge_id":"scheduled to visited","source":"MILESTONE_SCHEDULED","target":"MILESTONE_VISITED","label":"1","type":"followed"},{"edge_id":"visited to inspecting","source":"MILESTONE_VISITED","target":"MILESTONE_INSPECTING","label":"2","type":"followed"},{"edge_id":"inspecting to inspected","source":"MILESTONE_INSPECTING","target":"MILESTONE_INSPECTED","label":"3","type":"followed"},{"edge_id":"inspected to bidding","source":"MILESTONE_INSPECTED","target":"MILESTONE_BIDDING","label":"4","type":"followed"},{"edge_id":"bidding to bidding_over","source":"MILESTONE_BIDDING","target":"MILESTONE_BIDDING_OVER","label":"5","type":"followed"},{"edge_id":"bidding_over to negotiation","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_NEGOTIATION","label":"6","type":"followed"},{"edge_id":"negotiation to hot","source":"MILESTONE_NEGOTIATION","target":"MILESTONE_HOT","label":"7","type":"followed"},{"edge_id":"inspected to inspecting","source":"MILESTONE_INSPECTED","target":"MILESTONE_INSPECTING","type":"not followed"},{"edge_id":"bidding_over to inspected","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_INSPECTED","type":"not followed"},{"edge_id":"negotiation to vahancheck","source":"MILESTONE_NEGOTIATION","target":"MILESTONE_VAHANCHECK","type":"not followed"},{"edge_id":"vahancheck to hot","source":"MILESTONE_VAHANCHECK","target":"MILESTONE_HOT","type":"not followed"},{"edge_id":"hot to won","source":"MILESTONE_HOT","target":"MILESTONE_WON","type":"not followed"},{"edge_id":"won to stock_in","source":"MILESTONE_WON","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_in to stock_out","source":"MILESTONE_STOCK_IN","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"stock_in to vehicle_sold","source":"MILESTONE_STOCK_IN","target":"MILESTONE_VEHICLE_SOLD","type":"not followed"},{"edge_id":"vehicle_sold to dealer_payment","source":"MILESTONE_VEHICLE_SOLD","target":"MILESTONE_DEALER_PAYMENT","type":"not followed"},{"edge_id":"dealer_payment to gatepass","source":"MILESTONE_DEALER_PAYMENT","target":"MILESTONE_GATEPASS","type":"not followed"},{"edge_id":"gatepass to stock_out","source":"MILESTONE_GATEPASS","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"stock_out to stock_in","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_out to inspection_miss","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_INSPECTION_MISS","type":"not followed"},{"edge_id":"inspection_miss to transfered","source":"MILESTONE_INSPECTION_MISS","target":"MILESTONE_TRANSFERED","type":"not followed"}]}

// const input = {"lead_id":998855,"nodes":[{"id":"MILESTONE_SCHEDULED","label":"SCHEDULED","type":"completed","info":[{"user_id":4087,"user_email":"a@b.com","time_stamp":"Jun 9, 2022 6:38 PM"}]},{"id":"MILESTONE_VISITED","label":"VISITED","type":"completed","info":[{"user_id":4087,"user_email":"","time_stamp":"Jun 9, 2022 6:39 PM"}]},{"id":"MILESTONE_INSPECTING","label":"INSPECTING","type":"completed","info":[{"user_id":4087,"user_email":"a@b.com","time_stamp":"Jun 9, 2022 6:41 PM"}]},{"id":"MILESTONE_INSPECTED","label":"INSPECTED","type":"completed","info":[{"user_id":3333,"user_email":"a@b.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_BIDDING","label":"BIDDING","type":"completed","info":[{"user_id":3333,"user_email":"s@a.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_BIDDING_OVER","label":"BIDDING OVER","type":"completed","info":[{"user_id":3333,"user_email":"s@a.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_NEGOTIATION","label":"NEGOTIATION","type":"completed","info":[{"user_id":3333,"user_email":"s@a.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_HOT","label":"HOT","type":"current","info":[{"user_id":3333,"user_email":"s@a.com","time_stamp":"Jun 15, 2022 6:53 PM"}]},{"id":"MILESTONE_VAHANCHECK","label":"VAHANCHECK","type":"not completed"},{"id":"MILESTONE_WON","label":"WON","type":"not completed"},{"id":"MILESTONE_STOCK_IN","label":"STOCK IN","type":"not completed"},{"id":"MILESTONE_VEHICLE_SOLD","label":"VEHICLE SOLD","type":"not completed"},{"id":"MILESTONE_DEALER_PAYMENT","label":"DEALER PAYMENT","type":"not completed"},{"id":"MILESTONE_GATEPASS","label":"GATEPASS","type":"not completed"},{"id":"MILESTONE_STOCK_OUT","label":"STOCK OUT","type":"not completed"},{"id":"MILESTONE_INSPECTION_MISS","label":"INSPECTION MISS","type":"not completed"},{"id":"MILESTONE_TRANSFERED","label":"TRANSFERED","type":"not completed"}],"edges":[{"edge_id":"scheduled to visited","source":"MILESTONE_SCHEDULED","target":"MILESTONE_VISITED","label":"1","type":"followed"},{"edge_id":"visited to inspecting","source":"MILESTONE_VISITED","target":"MILESTONE_INSPECTING","label":"2","type":"followed"},{"edge_id":"inspecting to inspected","source":"MILESTONE_INSPECTING","target":"MILESTONE_INSPECTED","label":"3","type":"followed"},{"edge_id":"inspected to bidding","source":"MILESTONE_INSPECTED","target":"MILESTONE_BIDDING","label":"4","type":"followed"},{"edge_id":"bidding to bidding_over","source":"MILESTONE_BIDDING","target":"MILESTONE_BIDDING_OVER","label":"5","type":"followed"},{"edge_id":"bidding_over to negotiation","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_NEGOTIATION","label":"6","type":"followed"},{"edge_id":"negotiation to hot","source":"MILESTONE_NEGOTIATION","target":"MILESTONE_HOT","label":"7","type":"followed"},{"edge_id":"inspected to inspecting","source":"MILESTONE_INSPECTED","target":"MILESTONE_INSPECTING","type":"not followed"},{"edge_id":"inspected to visited","source":"MILESTONE_INSPECTED","target":"MILESTONE_VISITED","type":"not followed"},{"edge_id":"bidding_over to inspected","source":"MILESTONE_BIDDING_OVER","target":"MILESTONE_INSPECTED","type":"not followed"},{"edge_id":"inspected to bidding_over","source":"MILESTONE_INSPECTED","target":"MILESTONE_BIDDING_OVER","type":"not followed"},{"edge_id":"negotiation to vahancheck","source":"MILESTONE_NEGOTIATION","target":"MILESTONE_VAHANCHECK","type":"not followed"},{"edge_id":"vahancheck to hot","source":"MILESTONE_VAHANCHECK","target":"MILESTONE_HOT","type":"not followed"},{"edge_id":"hot to won","source":"MILESTONE_HOT","target":"MILESTONE_WON","type":"not followed"},{"edge_id":"won to stock_in","source":"MILESTONE_WON","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_in to vehicle_sold","source":"MILESTONE_STOCK_IN","target":"MILESTONE_VEHICLE_SOLD","type":"not followed"},{"edge_id":"stock_in to stock_out","source":"MILESTONE_STOCK_IN","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"vehicle_sold to stock_in","source":"MILESTONE_VEHICLE_SOLD","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"vehicle_sold to dealer_payment","source":"MILESTONE_VEHICLE_SOLD","target":"MILESTONE_DEALER_PAYMENT","type":"not followed"},{"edge_id":"dealer_payment to gatepass","source":"MILESTONE_DEALER_PAYMENT","target":"MILESTONE_GATEPASS","type":"not followed"},{"edge_id":"gatepass to stock_out","source":"MILESTONE_GATEPASS","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"stock_out to stock_in","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_STOCK_IN","type":"not followed"},{"edge_id":"stock_out to inspection_miss","source":"MILESTONE_STOCK_OUT","target":"MILESTONE_INSPECTION_MISS","type":"not followed"},{"edge_id":"inspection_miss to stock_out","source":"MILESTONE_INSPECTION_MISS","target":"MILESTONE_STOCK_OUT","type":"not followed"},{"edge_id":"inspection_miss to transfered","source":"MILESTONE_INSPECTION_MISS","target":"MILESTONE_TRANSFERED","type":"not followed"},{"edge_id":"transfered to inspection_miss","source":"MILESTONE_TRANSFERED","target":"MILESTONE_INSPECTION_MISS","type":"not followed"}]}

const input = {
  "lead_id":123,
  "nodes": [
    {
      "id": "N1",
      "label": "git init",
      "type":"completed"
    },
    {
      "id": "N2",
      "label": "git add",
      "type":"current"
    },
    {
      "id": "N3",
      "label": "git commit",
      "type":"completed"
    },
    {
      "id": "N4",
      "label": "git push",
      "type":"not completed"
    },
    {
      "id": "N5",
      "label": "git pull",
      "type":"not completed"
    }
  ],
  "edges":[
    {
      "edge_id": "E1",
      "source": "N1",
      "target":"N2",
      "type":"followed",
      "label":"1"
    },
    {
      "edge_id": "E2",
      "source": "N2",
      "target":"N3",
      "type":"followed",
      "label":"2"
    },
    {
      "edge_id": "E3",
      "source": "N3",
      "target":"N2",
      "type":"followed",
      "label":"3"
    },
    {
      "edge_id": "E4",
      "source": "N3",
      "target":"N4",
      "type":"not followed"
    },
    {
      "edge_id": "E5",
      "source": "N4",
      "target":"N2",
      "type":"not followed"
    },
    {
      "edge_id": "E6",
      "source": "N4",
      "target":"N5",
      "type":"not followed"
    }
  ]
}

// const input = { "lead_id": 12345, "nodes": [{ "id": "MILESTONE_SCHEDULED", "label": "SCHEDULED", "type": "completed", "info": [{ "user_id": 10, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_VISITED", "label": "VISITED", "type": "completed", "info": [{ "user_id": 10, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_INSPECTING", "label": "INSPECTING", "type": "current", "info": [{ "user_id": 20, "time_stamp": "Fri Jun 3 17:00:00" }, { "user_id": 60, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_INSPECTED", "label": "INSPECTED", "type": "completed", "info": [{ "user_id": 20, "time_stamp": "Fri Jun 3 17:00:00" }, { "user_id": 40, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_BIDDING", "label": "BIDDING", "type": "completed", "info": [{ "user_id": 30, "time_stamp": "Fri Jun 3 17:00:00" }, { "user_id": 40, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_BIDDING_OVER", "label": "BIDDING OVER", "type": "completed", "info": [{ "user_id": 30, "time_stamp": "Fri Jun 3 17:00:00" }, { "user_id": 40, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_NEGOTIATION", "label": "NEGOTIATION", "type": "completed", "info": [{ "user_id": 50, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_HOT", "label": "HOT", "type": "completed", "info": [{ "user_id": 50, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_WON", "label": "WON", "type": "completed", "info": [{ "user_id": 50, "time_stamp": "Fri Jun 3 17:00:00" }] }, { "id": "MILESTONE_STOCK_IN", "label": "stock in", "type": "not completed" }, { "id": "MILESTONE_VEHICLE_SOLD", "label": "vehicle sold", "type": "not completed" }, { "id": "MILESTONE_GATEPASS", "label": "gatepass", "type": "not completed" }, { "id": "MILESTONE_STOCK_OUT", "label": "stock out", "type": "not completed" }], "edges": [{ "edge_id": "scheduled to visited", "source": "MILESTONE_SCHEDULED", "target": "MILESTONE_VISITED", "label": "1", "type": "followed" }, { "edge_id": "visited to inspecting", "source": "MILESTONE_VISITED", "target": "MILESTONE_INSPECTING", "label": "2", "type": "followed" }, { "edge_id": "inspecting to inspected", "source": "MILESTONE_INSPECTING", "target": "MILESTONE_INSPECTED", "label": "3", "type": "followed" }, { "edge_id": "inspected to bidding", "source": "MILESTONE_INSPECTED", "target": "MILESTONE_BIDDING", "label": "4", "type": "followed" }, { "edge_id": "bidding to bidding over", "source": "MILESTONE_BIDDING", "target": "MILESTONE_BIDDING_OVER", "label": "5", "type": "followed" }, { "edge_id": "bidding over to inspected", "source": "MILESTONE_BIDDING_OVER", "target": "MILESTONE_INSPECTED", "label": "6", "type": "followed" }, { "edge_id": "inspected to bidding", "source": "MILESTONE_INSPECTED", "target": "MILESTONE_BIDDING", "label": "7", "type": "followed" }, { "edge_id": "bidding to bidding over", "source": "MILESTONE_BIDDING", "target": "MILESTONE_BIDDING_OVER", "label": "8", "type": "followed" }, { "edge_id": "bidding over to negotiation", "source": "MILESTONE_BIDDING_OVER", "target": "MILESTONE_NEGOTIATION", "label": "9", "type": "followed" }, { "edge_id": "negotiation to hot", "source": "MILESTONE_NEGOTIATION", "target": "MILESTONE_HOT", "label": "10", "type": "followed" }, { "edge_id": "hot to won", "source": "MILESTONE_HOT", "target": "MILESTONE_WON", "label": "11", "type": "followed" }, { "edge_id": "won to inspecting", "source": "MILESTONE_WON", "target": "MILESTONE_INSPECTING", "label": "12", "type": "followed" }, { "edge_id": "inspected to inspecting", "source": "MILESTONE_INSPECTED", "target": "MILESTONE_INSPECTING", "type": "not followed" }, { "edge_id": "won to stock in", "source": "MILESTONE_WON", "target": "MILESTONE_STOCK_IN", "type": "not followed" }, { "edge_id": "stock in to vehicle sold", "source": "MILESTONE_STOCK_IN", "target": "MILESTONE_VEHICLE_SOLD", "type": "not followed" }, { "edge_id": "vehicle sold to gatepass", "source": "MILESTONE_VEHICLE_SOLD", "target": "MILESTONE_GATEPASS", "type": "not followed" }, { "edge_id": "gatepass to stock out", "source": "MILESTONE_GATEPASS", "target": "MILESTONE_STOCK_OUT", "type": "not followed" }] }

// const input = {
//   "lead_id": "998856",
//   "nodes": [
//     {
//       "id": "MILESTONE_SCHEDULED",
//       "label": "SCHEDULED",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_VISITED",
//       "label": "VISITED",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_INSPECTING",
//       "label": "INSPECTING",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_INSPECTED",
//       "label": "INSPECTED",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_BIDDING",
//       "label": "BIDDING",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_BIDDING_OVER",
//       "label": "BIDDING OVER",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_NEGOTIATION",
//       "label": "NEGOTIATION",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_VAHANCHECK",
//       "label": "VAHANCHECK",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_HOT",
//       "label": "HOT",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_WON",
//       "label": "WON",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_STOCK_IN",
//       "label": "STOCK IN",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_VEHICLE_SOLD",
//       "label": "VEHICLE SOLD",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_DEALER_PAYMENT",
//       "label": "DEALER PAYMENT",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_GATEPASS",
//       "label": "GATEPASS",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_STOCK_OUT",
//       "label": "STOCK OUT",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_INSPECTION_MISS",
//       "label": "INSPECTION MISS",
//       "type": "not completed"
//     },
//     {
//       "id": "MILESTONE_TRANSFERED",
//       "label": "TRANSFERED",
//       "type": "not completed"
//     }
//   ],
//   "edges": [
//     {
//       "edge_id": "scheduled to visited",
//       "source": "MILESTONE_SCHEDULED",
//       "target": "MILESTONE_VISITED",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "visited to inspecting",
//       "source": "MILESTONE_VISITED",
//       "target": "MILESTONE_INSPECTING",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "inspecting to inspected",
//       "source": "MILESTONE_INSPECTING",
//       "target": "MILESTONE_INSPECTED",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "inspected to inspecting",
//       "source": "MILESTONE_INSPECTED",
//       "target": "MILESTONE_INSPECTING",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "inspected to bidding",
//       "source": "MILESTONE_INSPECTED",
//       "target": "MILESTONE_BIDDING",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "bidding to bidding_over",
//       "source": "MILESTONE_BIDDING",
//       "target": "MILESTONE_BIDDING_OVER",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "bidding_over to inspected",
//       "source": "MILESTONE_BIDDING_OVER",
//       "target": "MILESTONE_INSPECTED",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "bidding_over to negotiation",
//       "source": "MILESTONE_BIDDING_OVER",
//       "target": "MILESTONE_NEGOTIATION",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "negotiation to vahancheck",
//       "source": "MILESTONE_NEGOTIATION",
//       "target": "MILESTONE_VAHANCHECK",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "vahancheck to hot",
//       "source": "MILESTONE_VAHANCHECK",
//       "target": "MILESTONE_HOT",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "hot to won",
//       "source": "MILESTONE_HOT",
//       "target": "MILESTONE_WON",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "won to stock_in",
//       "source": "MILESTONE_WON",
//       "target": "MILESTONE_STOCK_IN",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "stock_in to stock_out",
//       "source": "MILESTONE_STOCK_IN",
//       "target": "MILESTONE_STOCK_OUT",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "stock_in to vehicle_sold",
//       "source": "MILESTONE_STOCK_IN",
//       "target": "MILESTONE_VEHICLE_SOLD",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "vehicle_sold to dealer_payment",
//       "source": "MILESTONE_VEHICLE_SOLD",
//       "target": "MILESTONE_DEALER_PAYMENT",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "dealer_payment to gatepass",
//       "source": "MILESTONE_DEALER_PAYMENT",
//       "target": "MILESTONE_GATEPASS",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "gatepass to stock_out",
//       "source": "MILESTONE_GATEPASS",
//       "target": "MILESTONE_STOCK_OUT",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "stock_out to stock_in",
//       "source": "MILESTONE_STOCK_OUT",
//       "target": "MILESTONE_STOCK_IN",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "stock_out to inspection_miss",
//       "source": "MILESTONE_STOCK_OUT",
//       "target": "MILESTONE_INSPECTION_MISS",
//       "type": "not followed"
//     },
//     {
//       "edge_id": "inspection_miss to transfered",
//       "source": "MILESTONE_INSPECTION_MISS",
//       "target": "MILESTONE_TRANSFERED",
//       "type": "not followed"
//     }
//   ]
// }