package vn.ctlab;

import android.view.View;

public class ViewMeasurer {

    public int getMeasuredHeight(int heightMeasureSpec) {
        return View.MeasureSpec.getSize(heightMeasureSpec);
    }

    public int getMeasuredWidth(int widthMeasureSpec) {
        return View.MeasureSpec.getSize(widthMeasureSpec);
    }

}
