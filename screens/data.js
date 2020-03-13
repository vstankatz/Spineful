import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Text, FlatList,  AppState, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import { ScreenOrientation } from 'expo';


export default class Data extends Component {
    state = {
        accelerometerData: {},
        isAccelerometerAvailable: "checking",
        screenOrientation: 'checking',
        appState: AppState.currentState,
        isScreenOrientationAvailable: 'checking'
    };

    componentDidMount() {
        this._subscribe();
        this.isAccelerometerAvailable();
        this.isScreenOrientationAvailable();
        AppState.addEventListener('change', this._handleAppState);
        //  this.getOrientation();
    }

    componentWillUnmount() {
        this._unsubscribe();
        AppState.removeEventListener("change", this._handleAppState);

    }

    _handleAppState = nextAppState => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App is in the foreground');
        }
        this.setState({ appState: nextAppState })
    };

    _toggle = () => {
        if (this._subscription) {
            this._unsubscribe();
        } else {
            this._subscribe();
        }
    };

    isAccelerometerAvailable() {
        Accelerometer.isAvailableAsync().then(
            result => {
                this.setState({
                    isAccelerometerAvailable: String(result)
                });
            },
            error => {
                this.setState({
                    isAccelerometerAvailable:
                        "Could not get isAvailable: " + error
                });
            }
        );
    }

    isScreenOrientationAvailable() {
        ScreenOrientation.getOrientationAsync().then(
            result => {

                this.setState({
                    screenOrientation: String(result.orientation)
                });
            },
            error => {
                this.setState({
                    isScreenOrientationAvailable:
                        "Could not get screen orientation: " + error
                });
            }
        );
    }

    _slow = () => {
        Accelerometer.setUpdateInterval(1000);
    };

    _fast = () => {
        Accelerometer.setUpdateInterval(16);
    };

    _subscribe = () => {
        this._subscription = Accelerometer.addListener(
            accelerometerData => {
                this.setState({ accelerometerData });
            }
        );
        console.log('Mounted');
    };

    getOrientation = () => {
        ScreenOrientation.OrientationChangeListener().then(result => {
            this.setState({
                screenOrientation: String(result)
            })
        })
    }

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
        console.log('UNMOUNTED');
        
    };

    render() {
        let { x, y, z } = this.state.accelerometerData;
   
        const styles = StyleSheet.create({
            color: {
                height: "100%",
                width: "100%",
                padding: 20,
                textAlign: 'center',
            },
            font: {
                color: "white",
                fontSize: 20,
            },
            weight: {
                fontSize: 20,
                color: 'white',
                paddingTop: 20,
                textAlign: 'center'
            },
            warning: {
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
                paddingTop: 20
            }
        });


        if (z < -0.7) {
            styles.color ={
                backgroundColor: 'black',
                height: "100%",
                width: "100%",
                padding: 20
            }
            return (

                <View style={styles.color}>
                    <Text style={styles.font}>
                        Depending on the tilt of your phone here is the estimated pressure put on your spine:
                         </Text>
                    <Text style={styles.weight}>
                        60lbs
                    </Text>
                    <Text style={styles.warning}>This is the maximum measurable force you can place on your spine from poor posture. Please stretch.</Text>
                </View>
            );
        }
        if (z < -0.58 && y < 0) {
            styles.color = {
                backgroundColor: 'red',
                height: "100%",
                width: "100%",
                padding: 20
            }

            return (
                <View style={styles.color}>
                    <Text style={styles.font}>
                        Depending on the tilt of your phone here is the estimated pressure put on your spine:
                         </Text>
                    <Text style={styles.weight}>
                        49lbs
                    </Text>
                    <Text style={styles.warning}>An average elephant heart only weighs 44lbs, currently to your spine your head weighs more.</Text>
                </View>
            );
        }

        if (z < -0.42 && y < 0) {
            styles.color = {
                backgroundColor: 'pink',
                height: "100%",
                width: "100%",
                padding: 20
            }

            return (
                <View style={styles.color}>
                    <Text style={styles.font}>
                        Depending on the tilt of your phone here is the estimated pressure put on your spine:
                         </Text>
                    <Text style={styles.weight}>
                        30lbs
                    </Text>
                    <Text style={styles.warning}>Watch the shoulder slouch!</Text>
                </View>
            );
        }

        if (z < -0.27 && y < 0) {
            styles.color = {
                backgroundColor: 'orange',
                height: "100%",
                width: "100%",
                padding: 20
            }
            return (
                <View style={styles.color}>
                    <Text style={styles.font}>
                        Depending on the tilt of your phone here is the estimated pressure put on your spine:
                         </Text>
                    <Text style={styles.weight}>
                        27 lbs
                    </Text>
                    <Text style={styles.warning}>Your neck is only at a slight angle and yet the weight on your spine has doubled compared to proper posture.</Text>
                </View>
            );
        }

        if (z < 0.2 && y < 0) {
            styles.color = {
                backgroundColor: 'green',
                height: "100%",
                width: "100%",
                padding: 20
            }

            return (
                <View style={styles.color}>
                    <Text style={styles.font}>
                        Depending on the tilt of your phone here is the estimated pressure put on your spine:
                         </Text>
                    <Text style={styles.weight}>
                        10 - 12lbs
                    </Text>
                    <Text style={styles.warning}>
                        The average weight of the head.
                    </Text>
                </View>
            );
        } else {
            styles.font = {
                color: "black",
                fontSize: 20,
                textAlign: 'center'
            }
            styles.weight = {
                fontSize: 20,
                color: 'black',
                paddingTop: 20,
                textAlign: 'center'
            }
            styles.warning = {
                fontSize: 20,
                color: 'black',
                textAlign: 'center',
                paddingTop: 20
            }
            return (
                <View style={styles.color}>
                    <Text style={styles.font}>
                        Depending on the tilt of your phone here is the estimated pressure put on your spine:
                           </Text>
                    <Text style={styles.weight}>
                        Not Measurable
                    </Text>
                </View>
            );

        }
    }
}

function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) / 100;
}


//BELOW IS THE FUNCTION METHOD

// export default function Data({ navigation }) {
            
//         const [accelerometerData, setAccelerometerData] = useState({});
//         const [isAccelerometerAvailable, setIsAccelerometerAvailable] = useState( "checking");
//         const [isScreenOrientationAvailable, setIsScreenOrientationAvailable] = useState('checking');
//         const [screenOrientation, setScreenOrientation] = useState( 'checking');
//         const [appState, setAppState] = useState(AppState.currentState);
//         const [colorState, setColorState] = useState('lightblue');
          
//          useEffect(() => {
//         getAccelerometerData();
//         },[])

//         useEffect(() => {
//             _subscribe();
//         }, [])

//     useEffect(() => {
//         return () => {
//         _unsubscribe();
//         };
//     }, [])

//          const  _handleAppState = nextAppState => {
//             if (appState.match(/inactive|background/) && nextAppState === 'active') {
//              console.log('App is in the foreground');
//          }
//             setAppState(nextAppState)
//          };

//         const _toggle = () => {
//             if (this._subscription) {
//                _unsubscribe();
//              } else {
//                _subscribe();
//              }
//           };

//         const getAccelerometerData = () => {
//           Accelerometer.isAvailableAsync().then(
//              result => {
//                   setIsAccelerometerAvailable(
//                   String(result)
//                  );
//              },
//               error => {
//                   setIsAccelerometerAvailable(
//                     "Could not get isAvailable: " + error
//             );
//            }
//       );
//       }

//         const  getScreenOrientation = () => {
//           ScreenOrientation.getOrientationAsync().then(
//                result => { 
                     
//                   setIsScreenOrientationAvailable( String(result.orientation)
//                 );
//               },
//               error => {
//                   setIsScreenOrientationAvailable(
//                  "Could not get screen orientation: " + error
//                  );
//              }
//         );
//          }

//                const  _slow = () => {
//                    Accelerometer.setUpdateInterval(1000);
//                  };

//                const  _fast = () => {
//                    Accelerometer.setUpdateInterval(16);
//                  };

//                const  _subscribe = () => {
//                    this._subscription = Accelerometer.addListener(
//                      accelerometerData => {
//                        setAccelerometerData(accelerometerData);
//                      }
//                    );
//                  };

//                const   getOrientation = () => {
//                    ScreenOrientation.OrientationChangeListener().then(result => {
//                      setScreenOrientation(
//                         String(result)
//                      )
//                     })
//                  }

//                const  _unsubscribe = () => {
//                   this._subscription && this._subscription.remove();
//                   this._subscription = null;
//                  };

//                  const styles = StyleSheet.create({
//                              font: {
//                                  color: "purple"
//                              }
//                          });
                                    
//                    if (accelerometerData.z < -0.7) {
//                        setColorState('black')
//                        styles.color = {
//                            backgroundColor: 'black',
//                                height: "100%",
//                                    width: "100%",
//                                        paddingTop: 20
//                        }

//                    }
//     if (accelerometerData.z < -0.58 && accelerometerData.y < 0) {
//                        setColorState("red")
//                        styles.color = {
//                            backgroundColor: 'red',
//                            height: "100%",
//                            width: "100%",
//                            paddingTop: 20
//                        }
//                    }
//                    if (accelerometerData.z < -0.42 && accelerometerData.y < 0) {
//                        setColorState("pink")
//                        styles.color = {
//                            backgroundColor: 'pink',
//                            height: "100%",
//                            width: "100%",
//                            paddingTop: 20
//                        }
//                    }
//                    if (accelerometerData.z < -0.27 && accelerometerData.y < 0) {
//                        setColorState( "orange")
//                        styles.color = {
//                            backgroundColor: 'orange',
//                            height: "100%",
//                            width: "100%",
//                            paddingTop: 20
//                        }
//                    }
//                    if (accelerometerData.z < 0.2 && accelerometerData.y < 0) {
//                        setColorState("green")
//                        styles.color = {
//                            backgroundColor: 'green',
//                            height: "100%",
//                            width: "100%",
//                            paddingTop: 20
//                        }
//                     } 
//                     // else {
//                     //    styles.color = {
//                     //        backgroundColor: 'lightblue',
//                     //         height: "100%",
//                     //         width: "100%",
//                     //         paddingTop: 20
//                     //    }
//                     // }
                                   
//             // let colorType = "'"+(String(Object.values({colorState })))+"'";
                          
//                     let { x, y, z } = accelerometerData;

//                    return (
//                        <View style={styles.color}>
//                            <Text style={styles.font}>
//                                Accelerometer: (in Gs where 1 G = 9.81 m s^-2)
//                          </Text>
//                            <Text style={styles.font}>
//                                x: {round(x)} y: {round(y)} z: {round(z)}
//                            </Text>
//                            <Text style={styles.font}>
//                                Accelerometer status:{" "}
//                                {isAccelerometerAvailable}
//                            </Text>
//                            <Text style={styles.font}>
//                                Screen Orientation: {screenOrientation}
//                            </Text>

//                        </View>
//                    );
                 
            
//             }

// function round(n) {
//   if (!n) {
//     return 0;
//   }

//   return Math.floor(n * 100) / 100;
// }

