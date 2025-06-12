function calculateBodaFare(){
    let distanceInKm=prompt('Unafika wapi mkubwa? Kilometer ngapi?');
     distanceInKm=parseInt(distanceInKm);
    if(!isNaN(distanceInKm)||distanceInKm <=0){
        console.log("tafadhali weka km halali")
        return;
    }

    let busfare=50;
    let chargePerKm=15;
    let distancecharge=distanceInKm*chargePerKm;

    let totalFare = busfare+distancecharge;

    let message = (`Uko kwote? Io ni ${distanceInKm} km: + Ukikalia Pikipiki: KES ${busfare}+Mpaka Uko: KES ${distancecharge} + Total: KES ${totalFare} + Panda Pikipiki!`)
    alert(message);
}
calculateBodaFare();