export const TicTacToe = {
    setup: () => ({ cells: Array(9).fill(null) }),
    metric:{
        economy: {
            gdpPerCapita: 0,
            employmentRate: 0,
            wealthInequality: 0,
        },
        energy: {
            energyConsumptionPerCapita: 0,
            energyMix: 0,
            electicityGeneration: 0,
        },
        socialWellbeing: {
            publicSatisfaction: 0,
            healthcare: 0,
        },
    },
    modifier: {
        absoluteValue: function(value, modifier) {
            return value + modifier;
        },
        percentageValue: function(value, modifier) {
            return value * (1+modifier / 100);
        },
        multiplier: function(value, modifier) {
            return value * modifier;
        }
    },

    turn: {
        
    },
    
    moves: {
        // clickCell: ({ G, playerID }, id) => {
        //   G.cells[id] = playerID;
        // },
    },

    economyScrenarios: [
    // Post-Recession Recovery: Slow but steady GDP growth per stage. 
    {
        name: "Post-Recession Recovery",
        gdpPerCapita: 1.5,
        employmentRate: 0.5,
        wealthInequality: 0.5,
    }
    ],

    cards: {

    },

    scenario: {

    },

    randomEvents:{

    },
    phases:{

    },
    endTurn: ({ G, ctx }) => {
        
    },
    endPhase: ({G, ctx}) => {

    }
};

// Get random econonomy scenario based
function StartGame() {
    
}
  
// Ambil kartu dari deck
function DrawCards() {

}