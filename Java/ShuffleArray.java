//Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
import java.util.*;

public class ShuffleArray{
	public static void main(String[] args) {
		int arr[] = {1, 2, 3, 4, 5, 6, 7};
		shuffleArray(arr);
		System.out.print(Arrays.toString(arr));
	}
	public static void shuffleArray(int[] arr){
		int n = arr.length;
		for(int i=0; i<n; i++){
			// we are creating a random index for random shufful ever time 
			int randomIndex = (int)(Math.random()*i);
			// swapping with randomIndex to i
			int temp = arr[randomIndex];
			arr[randomIndex] = arr[i];
			arr[i] = temp;
		}
	}
}