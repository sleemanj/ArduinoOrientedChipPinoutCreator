var templates = [
      
        // The numbers in a template are the physical pin numbers
        // of the IC, starting at 1 top left and progressing anticlockwise
        // as is the custom.
        {
          Name   : 'ATtiny13', // A label for the IC
          Package: '2SIDED'  , // 2SIDED or 4SIDED
          Pins   :  8     ,    // Total number of pins in the package
          Programmer: 'ISP', 
          
          // PRC (Power Reset Clock) are the labels closest to the IC
          // If a label should be applied to more that one pin, use an 
          // array...
          //  Vcc: [1,2,3]
          // Interrupt is a special case and will be labelled as 
          // INTx where x is the index of the pin in the array
          // eg Interrupt: [6,9] 
          //    means pin 6 gets labelled INT0 and 9 as INT1
          //
          // Reset, XTAL1 and XTAL2 if present will cause 
          // other labels on that pin to be semi-transparent to show
          // that those functions are typically not available 
          // due to use of reset or crystals.
          PRC    :   { Vcc:8, Gnd:4, Reset: 1, CLKI: 2, Interrupt: [6]},
          
          // Pins which can handle PWM functions (Timer Controlled Outputs)
          // these are labelled with a tilde ~
          PWM    :   [5,6],
          
          // Digital Input/Output Pins
          // These get labeled as the index in the array, eg
          //   Digital: [3,4,5] 
          // marks pin 3 as "0", pin 4 as "1" and pin 5 as "2"
          Digital:   [5,6,7,2,3,1],              
          
          // Analog Input/Output Pins
          // These get labelled as An where n is the index in the array
          //   Analog: [3,4,5] 
          // marks pin 3 as "A0", pin 4 as "A1" and pin 5 as "A2"
          Analog :   [1,7,3,2],                 
          
          // Other categries of pins, the labels you use here are 
          // arbitrary, Serial, SPI and I2C will get coloured labels
          // others are just white.          
          Peripherals: 
          {
            Serial : {TX:   5,   RX: 6},
            Programmer    : {MOSI: 5, MISO: 6, SCK: 7},
           // I2C    : {SDA:  6,          SCL: 7}
          }        
          
        },
      
        {
          Name   : 'ATtiny 5/10', // A label for the IC
          Package: '2SIDED'  , // 2SIDED or 4SIDED
          Pins   :  6     ,    // Total number of pins in the package
          Programmer: 'TPI',
          
          // PRC (Power Reset Clock) are the labels closest to the IC
          // If a label should be applied to more that one pin, use an 
          // array...
          //  Vcc: [1,2,3]
          // Interrupt is a special case and will be labelled as 
          // INTx where x is the index of the pin in the array
          // eg Interrupt: [6,9] 
          //    means pin 6 gets labelled INT0 and 9 as INT1
          //
          // Reset, XTAL1 and XTAL2 if present will cause 
          // other labels on that pin to be semi-transparent to show
          // that those functions are typically not available 
          // due to use of reset or crystals.
          PRC    :   { Vcc:5, Gnd:2, Reset: 6, CLKI: 3, Interrupt: [4]},
          
          // Pins which can handle PWM functions (Timer Controlled Outputs)
          // these are labelled with a tilde ~
          PWM    :   [1,3],
          
          // Digital Input/Output Pins
          // These get labeled as the index in the array, eg
          //   Digital: [3,4,5] 
          // marks pin 3 as "0", pin 4 as "1" and pin 5 as "2"
          Digital:   [1,3,4,6],              
          
          // Analog Input/Output Pins
          // These get labelled as An where n is the index in the array
          //   Analog: [3,4,5] 
          // marks pin 3 as "A0", pin 4 as "A1" and pin 5 as "A2"
          Analog :   [1,3,4,6],                 
          
          // Other categries of pins, the labels you use here are 
          // arbitrary, Serial, SPI and I2C will get coloured labels
          // others are just white.          
          Peripherals: 
          {
            Serial : {TX:   1,   RX: 3},
            Programmer    : {DATA: 1,   CLK: 3},
          }        
          
        },
        
        {
          Name   : 'ATtiny 4/9', // A label for the IC
          Package: '2SIDED'  , // 2SIDED or 4SIDED
          Pins   :  6     ,    // Total number of pins in the package
          Programmer: 'TPI',
          
          // PRC (Power Reset Clock) are the labels closest to the IC
          // If a label should be applied to more that one pin, use an 
          // array...
          //  Vcc: [1,2,3]
          // Interrupt is a special case and will be labelled as 
          // INTx where x is the index of the pin in the array
          // eg Interrupt: [6,9] 
          //    means pin 6 gets labelled INT0 and 9 as INT1
          //
          // Reset, XTAL1 and XTAL2 if present will cause 
          // other labels on that pin to be semi-transparent to show
          // that those functions are typically not available 
          // due to use of reset or crystals.
          PRC    :   { Vcc:5, Gnd:2, Reset: 6, CLKI: 3, Interrupt: [4]},
          
          // Pins which can handle PWM functions (Timer Controlled Outputs)
          // these are labelled with a tilde ~
          PWM    :   [1,3],
          
          // Digital Input/Output Pins
          // These get labeled as the index in the array, eg
          //   Digital: [3,4,5] 
          // marks pin 3 as "0", pin 4 as "1" and pin 5 as "2"
          Digital:   [1,3,4,6],              
          
          // Analog Input/Output Pins
          // These get labelled as An where n is the index in the array
          //   Analog: [3,4,5] 
          // marks pin 3 as "A0", pin 4 as "A1" and pin 5 as "A2"
          Analog :   [],                 
          
          // Other categries of pins, the labels you use here are 
          // arbitrary, Serial, SPI and I2C will get coloured labels
          // others are just white.          
          Peripherals: 
          {
            Serial : {TX:   1,   RX: 3},
            Programmer    : {DATA: 1,   CLK: 3},
          }        
          
        },
        {
          Name   : 'ATtiny 24/44/84',
          Package: '2SIDED'  ,
          Pins   :  14     ,
          Programmer: 'ISP',
          
          PRC    :   { Vcc:1, Gnd:14, Reset: 4, XTAL1: 2, XTAL2: 3, Interrupt: [8]},
          PWM    :   [5,6,7,8],
          Digital:   [13,12,11,10,9,8,7,6,5,3,2,4], 
          Analog :   [13,12,11,10,9,8,7,6],
          
          Peripherals: 
          {
            Serial : {TX:   12,  RX: 11},
            Programmer    : {MOSI: 7, MISO: 8, SCK: 9},
            SPI    : {MOSI: 8, MISO: 7, SCK: 9},
            I2C    : {SDA:  7,          SCL: 9}
          }        
          
        },
        
        {
          Name   : 'ATtiny 24/44/84 A0=D10 Variant',
          Package: '2SIDED'  ,
          Pins   :  14     ,
          Programmer: 'ISP',
          
          PRC    :   { Vcc:1, Gnd:14, Reset: 4, XTAL1: 2, XTAL2: 3, Interrupt: [8]},
          PWM    :   [5,6,7,8],
          Digital:   [2,3,5,6,7,8,9,10,11,12,13,4], 
          Analog :   [13,12,11,10,9,8,7,6],
          
          Peripherals: 
          {
            Serial : {TX:   12,  RX: 11},
            Programmer    : {MOSI: 7, MISO: 8, SCK: 9},
            SPI    : {MOSI: 8, MISO: 7, SCK: 9},
            I2C    : {SDA:  7,          SCL: 9}
          }        
          
        },
        {
          Name   : 'ATtiny 25/45/85',
          Package: '2SIDED'  ,
          Pins   :  8     ,
          Programmer: 'ISP',
          
          PRC    :   { Vcc:8, Gnd:4, Reset: 1, XTAL1: 2, XTAL2: 3, Interrupt: [6]}, // PRC = Power, Reset and Clock
          PWM    :   [5,6,3],
          Digital:   [5,6,7,2,3,1], 
          Analog :   [1,7,3,2],
          
          Peripherals: 
          {
            Serial : {TX:   5,   RX: 6},
            Programmer    : {MOSI: 5, MISO: 6, SCK: 7},
            SPI    : {MOSI: 6, MISO: 5, SCK: 7},
            I2C    : {SDA:  5,          SCL: 7}
          }        
          
        },
      
      
        {
          Name   : 'ATMega 48/88/168/328 (DIP)',
          Package: '2SIDED'  ,
          Pins   :  28     ,
          
          PRC    :   { Vcc:[7,20], Gnd:[8,22], Reset: 1, XTAL1: 9, XTAL2: 10, AREF:21, Interrupt: [4,5]}, // PRC = Power, Reset and Clock
          PWM    :   [5,11,12,15,16,17],
          Digital:   [2,3,4,5,6,11,12,13,14,15,16,17,18,19,23,24,25,26,27,28], 
          Analog :   [23,24,25,26,27,28],
          
          Peripherals: 
          {
            Serial : {TX:   3,  RX: 2},
            SPI    : {MOSI: 17, MISO: 18, SCK: 19},
            I2C    : {SDA:  27,           SCL: 26}
          }        
          
        },
      
            
        {
          Name   : 'ATMega 48/88/168/328 (QFP/MLF32)',
          Package: '4SIDED'  ,
          Pins   :  32     ,
          
          PRC    :   { Vcc:[4,6,], AVcc: 18, Gnd:[3,5,21], Reset: 29, XTAL1: 7, XTAL2: 8, AREF:20, Interrupt: [32,1]}, // PRC = Power, Reset and Clock
          PWM    :   [1,9,10,13,15],
          Digital:   [30,31,32,1,2,9,10,11,12,13,14,15,16,17,23,24,25,26,27,28], 
          Analog :   [23,24,25,26,27,28,19,22],
          
          
          Peripherals: 
          {
            Serial : {TX:   31,  RX: 30},
            SPI    : {MOSI: 15, MISO: 16, SCK: 17},
            I2C    : {SDA:  27,           SCL: 28}
          }        
          
        },
      
            
        {
          Name   : 'ATMega 48/88/168/328 (MLF28)',
          Package: '4SIDED'  ,
          Pins   :  28     ,
          
          PRC    :   { Vcc:[3], AVcc: 16, Gnd:[4,18], Reset: 25, XTAL1: 5, XTAL2: 6, AREF:17, Interrupt: [28,1]}, // Closest labels to chip
          PWM    :   [1,7,8,11,12,13],
          Digital:   [26,27,28,1,2,7,8,9,10,11,12,13,14,15,19,20,21,22,23,24], 
          Analog :   [19,20,21,22,23,24],
          
          Peripherals: 
          {
            Serial : {TX:   27,  RX: 26},
            SPI    : {MOSI: 13, MISO: 14, SCK: 15},
            I2C    : {SDA:  23,           SCL: 24}
          }        
          
        },
      
            
        {
          Name   : 'ATtiny828',
          Package: '4SIDED'  ,
          Pins   :  32     ,
          
          PRC    :   { Vcc:[4], AVcc: 18, Gnd:[5,21], Reset: 29, CLKI: 6, Interrupt: [32,1]}, // Closest labels to chip
          PWM    :   [3,6,7,31],
          Digital:   [9,10,11,12,13,14,15,16,17,19,20,22,23,24,25,26,27,28,29,30,31,32,1,2,3,6,7,8], 
          Analog :   [9,10,11,12,13,14,15,16,17,19,20,22,23,24,25,26,31,32,1,2,3,6,7,8,27,28,29,30],
          
          Peripherals: 
          {
            Serial : {TX:   2,  RX: 1},
            SPI    : {MOSI: 27, MISO: 28, SCK: 30, SS: 31},
            I2C    : {SDA:  27,           SCL: 30}
          },       
          
          "VerticalPinsOffset": {
            "top": "-52",
            "left": "-7"
          },
          "VerticalPinsMargin": {
            "top": "290",
            "bottom": "256"
          }
        }

  
    
];