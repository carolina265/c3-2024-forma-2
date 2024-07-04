import eventosJSON from '../../../../dataset/historical_data.json'

exports.getHistoricalEvents = (ocurrence) => {
    let filtered_events = []
    if(length(ocurrence)!=2) {
        ctx.status=400
        ctx.body = { message: 'El input debe ser ac o dc' }
    }
    ocurrence=ocurrence.toLowerCase()
    if (ocurrence == 'ac'){
        filtered_events = eventosJSON.result.events.filter((evn) => evn.date < 0)
        ctx.status=200
        ctx.body=filtered_events
    } else if(ocurrence =='dc'){
        filtered_events = eventosJSON.result.events.filter((evn) => evn.date > 0)
        ctx.status=200
        ctx.body=filtered_events
    }
    else if(typeof(ocurrence)!=String) {
        ctx.status=400
        ctx.body = { message: 'Solo se aceptan caracteres no numéricos' }

    }
    else if(length(ocurrence)!=2) {
        ctx.status=400
        ctx.body = { message: 'El input debe ser ac o dc' }

    }
    return filtered_events
}