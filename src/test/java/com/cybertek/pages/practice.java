package com.cybertek.pages;

import java.util.Arrays;

public class practice {
//method check is build out string is another string
//abc cba listen/silent

public  boolean checkString(String str,String str2){

    String [] first=str.split("");
    String[] second=str2.split("");
    Arrays.sort(first);
    Arrays.sort(second);


    return Arrays.equals(first,second);



}


    public static void main(String[] args) {
        practice pr=new practice();

        System.out.println(pr.checkString("silent","listen"));
    }




}
