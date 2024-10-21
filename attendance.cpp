#include<bits/stdc++.h>
using namespace std;
int main(){
    char array[3];
    for(int i=0;i<3;i++){
        cin>>array[i];
    }
    int count = 0;
    for(int i=0;i<3;i++){
        if(array[i] == 'f' || array[i] == 'F'){
            count++;
        }
    }
    if(count<1){
        cout<<"Your team is disqualified."<<endl;
    }
    else{
        cout<<"TEAM ACCEPTED."<<endl;
    }
    return 0;
}