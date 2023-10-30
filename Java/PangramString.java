// C. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z) 

import java.util.*;

public class PangramString{
	public static void main(String[] args) {
		String str = "abcdefghijklmnopqrstuvwxyz";
		boolean ans = checkPangram(str.toLowerCase()); // we use toLowerCase() to make every charator lower case
		System.out.println(ans);
	}
	public static boolean checkPangram(String str){
		int n = str.length();
		if(n < 26) return false; // if string length is length than 26 it means we dont have all charactors
		for(char ch='a'; ch<='z'; ch++){
			if(str.indexOf(ch) < 0){ // if any charactor's index is less than 0 it means that charactor is not in the string
				return false;
			}
		}
		return true;
	}
}