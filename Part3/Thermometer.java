package Part3;

// Homework 1, Part 3

// cmd to create javadoc: 
// javadoc -sourcepath ./src *.java -d ./docs

import java.util.EnumMap;
import java.util.Map;

/**
 * A device that can report the current temperature.
*/
public class Thermometer {
	
	/**
	 * Creates an instance of the Thermometer class.
	 */
	public Thermometer() {
		// implementation
	}
	
	/**
	 * Provides the current temperature as sensed by the thermostat 
	 * in both Fahrenheit and Celsius. 
	 * @return a Map&lt;Scale, Integer&gt; that provides the temperature scale 
	 * and current temperature rounded to the nearest whole number.
	 * <br><br><strong>Example:</strong>
	 * Assume the thermostat reads 32&deg;F or 0&deg;C.
	 * {@snippet :
	 * curTemperature() // returns {Fahrenheit=32, Celsius=0}
	 * }
	 */
	public static Map<Scale, Integer> curTemperature() {
        // implementation
		
		// temporary code to remove errors
		return new EnumMap<Scale, Integer>(Scale.class);
    }
	
}
