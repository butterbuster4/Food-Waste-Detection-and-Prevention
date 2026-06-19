package com.plt.grp05h5.domain.structure.extensions.cw_dynamic_form_library; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class FormInfoStructure {

    public String name;

    public String url;

    public Long span;

    public String layout;

    public Long labelWidth;

    public String labelAlign;

    public Boolean isBtn;

    public String customStyle;

    public String pageComponentList;

    public String structure;

    public String getName() {
        return name;
    } 

    public void setName(String name) {
        this.name = name; 
    } 

    public String getUrl() {
        return url;
    } 

    public void setUrl(String url) {
        this.url = url; 
    } 

    public Long getSpan() {
        return span;
    } 

    public void setSpan(Long span) {
        this.span = span; 
    } 

    public String getLayout() {
        return layout;
    } 

    public void setLayout(String layout) {
        this.layout = layout; 
    } 

    public Long getLabelWidth() {
        return labelWidth;
    } 

    public void setLabelWidth(Long labelWidth) {
        this.labelWidth = labelWidth; 
    } 

    public String getLabelAlign() {
        return labelAlign;
    } 

    public void setLabelAlign(String labelAlign) {
        this.labelAlign = labelAlign; 
    } 

    public Boolean getIsBtn() {
        return isBtn;
    } 

    public void setIsBtn(Boolean isBtn) {
        this.isBtn = isBtn; 
    } 

    public String getCustomStyle() {
        return customStyle;
    } 

    public void setCustomStyle(String customStyle) {
        this.customStyle = customStyle; 
    } 

    public String getPageComponentList() {
        return pageComponentList;
    } 

    public void setPageComponentList(String pageComponentList) {
        this.pageComponentList = pageComponentList; 
    } 

    public String getStructure() {
        return structure;
    } 

    public void setStructure(String structure) {
        this.structure = structure; 
    } 

}
