export const getAllPizzaReducer=(state={pizzas:[]},action) => {
    switch(action.type){
        case 'Get_pizzas_request':
            return {
                ...state,
                loading:true
             };

            case "Get_pizzas_success":
                return{
                    pizzas:action.payload,
                    loading:false
                };

 
            case "Get_pizzas_fail":
                return{
                    error:action.payload,
                    loading:false
                };

                default:
                    return state;
    }
};