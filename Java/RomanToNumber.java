// B. Enter a Roman Number as input and convert it to an integer. (ex IX = 9) 

import java.util.*;

public class RomanToNumber{
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		String roman = input.nextLine();
		System.out.println("Roman number: "+roman);

		int result = changeToNumber(roman);
		System.out.println("Integer number: "+result);
	}
	public static int changeToNumber(String romanNumber){
		HashMap<Character, Integer> romanMap = new HashMap<>();
		romanMap.put('I', 1);
		romanMap.put('V', 5);
		romanMap.put('X', 10);
		romanMap.put('L', 50);
		romanMap.put('C', 100);
		romanMap.put('D', 500);
		romanMap.put('M', 1000);

		int result = 0;
		// XI, IX
		for(int i=0; i<romanNumber.length(); i++){
			int currRomanValue = romanMap.get(romanNumber.charAt(i));
			if(i+1 < romanNumber.length() && romanMap.get(romanNumber.charAt(i + 1)) > currRomanValue){
				result -= currRomanValue;
			}
			else{
				result += currRomanValue;
			}
		}
		return result;
	}
}