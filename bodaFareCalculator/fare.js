function calculateBodaFare(){
    let distanceInKm=prompt('Unafika wapi mkubwa? Kilometer ngapi?');
     distanceInKm=parseInt(distanceInKm);
    if(isNaN(distanceInKm)){
        console.log("tafadhali weka km halali")
        return;
    }

    let busfare=150;
    let chargePerKm=15;
    let distancecharge=distanceInKm*chargePerKm;
    let totalFare = busfare+distancecharge;

    let message = (`Uko kwote?\n` +` Hiyo ni ${distanceInKm} km\n` + `Ukikalia Pikipiki: KES ${busfare}\n`+ `Mpaka Uko: KES ${distancecharge}\n` + `Total: KES ${totalFare}\n` + `Panda Pikipiki!`)
    alert(message);
}
calculateBodaFare();