<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:exsl="http://exslt.org/common"
                xmlns:l="http://docbook.sourceforge.net/xmlns/l10n/1.0"
                xmlns:h="http://www.w3.org/1999/xhtml"
                xmlns="http://www.w3.org/1999/xhtml"
                extension-element-prefixes="exsl"
                exclude-result-prefixes="exsl h">
  <xsl:output method="xml"
              encoding="UTF-8"/>
  <xsl:preserve-space elements="*"/>

  <!-- Override to flick on autogeneration of labels for both Figure and Table captions -->
  <xsl:template match="h:caption|h:figcaption" mode="process-heading">
    <xsl:param name="autogenerate.labels" select="$autogenerate.labels"/>
    <!-- Labeled element is typically the parent element of the heading (e.g., <section> or <figure>) -->
    <xsl:param name="labeled-element" select=".."/>
    <!-- Labeled element semantic name is typically the parent element of the heading's @data-type -->
    <xsl:param name="labeled-element-semantic-name" select="../@data-type"/>
    <!-- Name for output heading element; same as current node name by default -->
    <xsl:param name="output-element-name" select="local-name(.)"/>
    <xsl:element name="{$output-element-name}" namespace="http://www.w3.org/1999/xhtml">
      <xsl:apply-templates select="@*"/>
      <!-- BEGIN OVERRIDE -->
      <!-- ALWAYS turn on labelgen for captions -->
      <xsl:variable name="heading.label">
        <xsl:apply-templates select="$labeled-element" mode="label.markup"/>
      </xsl:variable>
      <xsl:if test="$heading.label != ''">
        <span class="label">
          <xsl:variable name="element-labelname">
            <xsl:call-template name="get-localization-value">
              <xsl:with-param name="gentext-key">
                <xsl:value-of select="$labeled-element-semantic-name"/>
              </xsl:with-param>
            </xsl:call-template>
          </xsl:variable>
          <xsl:if test="normalize-space($element-labelname) != ''">
            <xsl:value-of select="concat($element-labelname, ' ')"/>
          </xsl:if>
          <xsl:value-of select="$heading.label"/>
          <xsl:value-of select="$label.and.title.separator"/>
        </span>
      </xsl:if>
      <!-- END OVERRIDE -->
      <xsl:apply-templates/>
    </xsl:element>
  </xsl:template>
</xsl:stylesheet>
