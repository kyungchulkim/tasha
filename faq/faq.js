var __faqController = function ($scope, $http) {

    function getfaq() {
        $http.get('faq/data/faq-en.json')
            .then(function (res) {
                $scope.faqs = res.data;
                for (var i = 0; i < res.data.length; i++) {
                    isShow.push(true);
                }
            });
    }
    var isShow = [];

    getfaq();

    $scope.openfaq = function (index) {
        isShow[index] = !isShow[index];
    }

    $scope.isShow = function ($index) {
        
        var display = isShow[$index] ? 'block' : 'block';
        var max_height = isShow[$index] ? '0' : '100px';
        return {
            "display": display,
            "height" : max_height
        }
    }
};