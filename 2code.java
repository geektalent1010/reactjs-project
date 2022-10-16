// C++ code to implement the approach

#include <bits/stdc++.h>
using namespace std;

// Function to find the parity of the last element
int parity(int N, int K)
{
	if ((K == 1 && (N % 2 != 0)) || K == 2)
		return 1;
	return 0;
}

// Driver code
int main()
{
	int N = 5, K = 1;

	// Function call
	if (parity(N, K))
		cout << "Odd";
	else
		cout << "Even";
	return 0;
}
