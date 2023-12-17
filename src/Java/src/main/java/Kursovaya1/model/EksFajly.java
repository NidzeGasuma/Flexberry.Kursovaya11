package Kursovaya1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЭксФайлы
 */
@Entity(name = "IISKursovaya1ЭксФайлы")
@Table(schema = "public", name = "ЭксФайлы")
public class EksFajly {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Репозиторий")
    private String репозиторий;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Размер")
    private Integer размер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Rasshirenie")
    @Convert("Rasshirenie")
    @Column(name = "Расширение", length = 16, unique = true, nullable = false)
    private UUID _rasshirenieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Rasshirenie", insertable = false, updatable = false)
    private Rasshirenie rasshirenie;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdiIzm")
    @Convert("EdiIzm")
    @Column(name = "ЕдиИзм", length = 16, unique = true, nullable = false)
    private UUID _ediizmid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdiIzm", insertable = false, updatable = false)
    private EdiIzm ediizm;


    public EksFajly() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getРепозиторий() {
      return репозиторий;
    }

    public void setРепозиторий(String репозиторий) {
      this.репозиторий = репозиторий;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public Integer getРазмер() {
      return размер;
    }

    public void setРазмер(Integer размер) {
      this.размер = размер;
    }


}