// # **JobIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// job IDs available in the Connectivity Map

// JobIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { JobID:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'JobID',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    ['http://api.lincscloud.org/compute_status?',
                          'q={"job_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.job_id);
                        object_map[element.job_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Job',
                            search_column: 'job_id',
                            color: '#BDBDBD',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);
