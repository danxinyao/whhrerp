import { homePage as ajax } from 'services'
export default {
    name: 'HrRegion',
    data() {
        return {
            stateRegionID: '',
            cityRegionID: '',
            districtRegionID: '',
            stateList: [],
            cityList: [],
            districtList: []
        }
    },
    mounted() {
        this.getRegions()
    },
    methods: {
        getRegions(levelID = 2, parentID = '00000000-0000-0000-0000-000000010001') {
            ajax.queryRegions({
                parentID: parentID,
                levelID: levelID
            }).then((result) => {
                if (levelID === 2) {
                    this.stateList = result
                }
                else if (levelID === 3) {
                    this.cityList = result
                }
                else {
                    this.districtList = result
                }
            })
        }
    },
    watch: {
        stateRegionID: function(val) {
            this.cityList = []
            this.districtList = []
            this.cityRegionID = ''
            this.districtRegionID = ''
            this.getRegions(3, val)
        },
        cityRegionID: function(val) {
            this.districtList = []
            this.districtRegionID = ''
            this.getRegions(4, val)
        },
        districtRegionID: function(val) {
            if (this.stateRegionID !== '' && this.cityRegionID !== '' && this.districtRegionID !== '') {
                this.$emit('changeRegions', {
                    state: this.stateRegionID,
                    city: this.cityRegionID,
                    district: this.districtRegionID
                })
            }
        }
    }
}