(function () {
    'use strict';

    angular
        .module('quitandaApp')
        .service('produtos_service', produtos_service);

    produtos_service.$inject = ['$http'];
    function produtos_service($http) {

        this.dados_tabela = function() {
            return $http({
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                url: '/produto/find-all',
                responseType: 'json',
                method: "GET",
                params: {
                    format: 'jsonp',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function (response) {
                return response.data;
            });   
        }

        this.deleteProduto = function(produto) {
            return $http({
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                url: '/produto/delete',
                responseType: 'json',
                method: "POST",
                data:{"id":produto.id},
                params: {
                    format: 'jsonp',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function (response) {
                if(response.ok) {
                    return produto;
                }else{
                    return null;
                }
                
            });   
        }

        this.editProduto = function(produto) {
            return $http({
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                url: '/produto/edit',
                responseType: 'json',
                method: "PUT",
                data:{"produto":produto},
                params: {
                    format: 'jsonp',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function (response) {
                return response.data;
            });   
        }

        this.selectProduto = function(id) {
            return $http({
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                url: '/produto/find-one',
                responseType: 'json',
                method: "GET",
                data:{"id":id},
                params: {
                    format: 'jsonp',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function (response) {
                return response.data;
            });   
        }

    }
})();