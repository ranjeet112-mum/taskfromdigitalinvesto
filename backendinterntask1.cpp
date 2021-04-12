#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin >> n ;
    int array[n];
    for(int i=0;i<n;i++){
        array[i]=0;
    }
    int num;
    for(int i=0;i<n;i++){
        cin>>num;
        array[num]++;
    }
    int check = 0;
    for(int i=0;i<n;i++){
        if(array[i]>1){
            if(check) {
                cout<<", "<<i;
            }else {
                cout<<i;
                check = 1;
            }
        } 
    }
    return 0;
}