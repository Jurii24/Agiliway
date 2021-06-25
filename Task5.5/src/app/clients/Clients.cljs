(ns app/clients.Clients
  (:require
   ))


(defn clients []
  [:section#clients.section-space
   [:div.container
    [:h2.text-center "Trusted by companies like"]
    [:div.row.justify-content-center.align-items-center
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/1.png" :alt "client1"}]]
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/2.png" :alt "client2"}]]
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/3.png" :alt "client3"}]]
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/4.png" :alt "client4"}]]
     [:div.col-lg-2.col-md-4.col-sm-6.client-item
      [:img.img-fluid {:src "assets/clients/5.png" :alt "client5"}]]]]])
     