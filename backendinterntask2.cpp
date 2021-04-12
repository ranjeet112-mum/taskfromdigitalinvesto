#include<bits/stdc++.h>
using namespace std;
int main(){
    string line;
    getline(cin, line);
    istringstream iss(line);
    vector<long long> arr;
    long long tmp;
    while (iss >> tmp) {
    arr.push_back(tmp);
    iss.ignore(1, ',');
    }
    sort(arr.begin(),arr.end());
    if(arr[arr.size()-1] != arr.size()){
        for(int i=1;i<=arr.size();i++){
            bool present = binary_search(arr.begin(),arr.end(),i);
            if(!present) {
                cout<< i;
                break;
            }
        }
    }

    return 0;
}